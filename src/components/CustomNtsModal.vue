<template>
  <div
    ref="addCustomNtsModal"
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">新增營養素</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="submitCustomNts" @submit.prevent="submitForm" novalidate>
            <div class="form-floating mb-3">
              <input
                v-model.trim="ntName.englishName"
                type="text"
                class="form-control"
                id="englishName"
                placeholder="營養素英文名稱 或 縮寫"
                required
              />
              <div class="invalid-feedback">此欄位為必填</div>
              <label for="englishName">
                <i class="text-danger fst-normal">＊</i>
                營養素英文名稱 或 縮寫
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                v-model.trim="ntName.chineseName"
                type="text"
                class="form-control"
                id="chineseName"
                placeholder="營養素中文名稱"
                required
              />
              <div class="invalid-feedback">此欄位為必填</div>
              <label for="chineseName">
                <i class="text-danger fst-normal">＊</i>
                營養素中文名稱
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                v-model.trim="ntName.unit"
                type="text"
                class="form-control"
                id="unit"
                placeholder="營養素英文單位，例如：mg"
                required
              />
              <div class="invalid-feedback">此欄位為必填</div>
              <label for="unit">
                <i class="text-danger fst-normal">＊</i>
                營養素英文單位，例如：mg
              </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button form="submitCustomNts" type="submit" class="btn btn-primary">
            送出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { mapActions, mapState } from 'pinia'
import { useMsgStore } from '@/stores/messageStore'
import { useCustomizeStore } from '@/stores/customizeStore'

export default {
  data() {
    return {
      modal: null,
      currentHeader: {},
    }
  },
  computed: {
    ...mapState(useCustomizeStore, ['ntName']),
  },
  methods: {
    ...mapActions(useMsgStore, ['openAlert']),
    ...mapActions(useCustomizeStore, ['addCustomNts']),

    submitForm(e) {
      const form = e.target
      if (!form.checkValidity()) {
        // 若表單無效，添加樣式提示
        form.classList.add('was-validated')
        this.openAlert(true, '還有必填欄位喔！')
        return
      } else {
        this.submitCustomNts()
      }
    },
    getCurrentHeader() {
      const addedHeader = JSON.parse(localStorage.getItem('myAddHeader'))
      const originHeader = JSON.parse(localStorage.getItem('myHeader'))
      this.currentHeader = { ...originHeader, ...addedHeader }
    },
    showModal() {
      this.modal.show()
      this.ntName.englishName = ''
      this.ntName.chineseName = ''
      this.ntName.unit = ''
    },
    hideModal() {
      this.modal.hide()
    },
    submitCustomNts() {
      this.addCustomNts()
      this.hideModal()
      this.getCurrentHeader()
    },
  },
  created() {
    this.getCurrentHeader()
  },
  mounted() {
    this.modal = new Modal(this.$refs.addCustomNtsModal)
  },
}
</script>
