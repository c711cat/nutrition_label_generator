<template>
  <div class="mx-auto col-11 col-lg-10 col-xl-9 col-xxl-8 pb-5 mb-5">
    <header class="text-end px-1">
      <h3 class="text-center">已新增的營養素</h3>
      <button
        v-if="myAddedNtsList.length > 0"
        @click="openAddNtsModal"
        type="button"
        class="btn btn-primary mb-3"
      >
        新增
      </button>
    </header>
    <div class="row">
      <section
        v-if="myAddedNtsList.length === 0"
        class="mx-auto py-5 col-12 w-100 text-center"
      >
        <i class="bi bi-card-text text-secondary"></i>
        <p class="text-center fw-bold fs-5 text-primary">{{ noResultText }}</p>
        <button @click="openAddNtsModal" class="btn btn-primary">
          試著新增一個吧！
        </button>
      </section>
      <section
        v-for="(item, index) in myAddedNtsList"
        :key="item"
        class="col-md-6 mb-3"
      >
        <div class="card bg-light">
          <div
            class="card-body d-flex flex-column justify-content-between"
            :class="used(item.enName) || productUsed(item.enName) ? 'pb-2' : ''"
          >
            <div>
              <p class="card-text mb-0 fw-bold">
                英文名稱：
                <span class="fw-normal">{{ item.enName }}</span>
              </p>
              <p class="card-text mb-0 fw-bold">
                中文名稱：
                <span class="fw-normal">{{ item.chName }}</span>
              </p>
              <p class="card-text mb-0 fw-bold">
                單位：
                <span class="fw-normal">{{ item.unit }}</span>
              </p>
              <p class="card-text mb-0 fw-bold">
                類別：
                <span class="fw-normal">{{ item.type }}</span>
              </p>
            </div>

            <div class="text-end">
              <button
                @click="openEditModal(index, item)"
                :disabled="used(item.enName) || productUsed(item.enName)"
                class="btn btn-outline-primary me-2"
              >
                編輯
              </button>
              <button
                @click="openDoubleCheckModal(index, item)"
                :disabled="used(item.enName) || productUsed(item.enName)"
                class="btn btn-outline-danger"
              >
                刪除
              </button>
              <div
                v-if="used(item.enName) || productUsed(item.enName)"
                class="py-1 text-secondary d-flex flex-wrap justify-content-end"
              >
                <i class="bi bi-info-circle pe-1"></i>
                <span v-if="used(item.enName)">自定義資料</span>
                <span v-if="used(item.enName) && productUsed(item.enName)">
                  及
                </span>
                <span v-if="productUsed(item.enName)">產品營養標示</span>
                <span>已使用，不予編輯及刪除</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <NewClaimNtsModal ref="newClaimNtsModal" />
    <DoubleCheckModal ref="doubleCheckModal" />
  </div>
</template>
<script>
import NewClaimNtsModal from '@/components/NewClaimNtsModal.vue'
import DoubleCheckModal from '@/components/DoubleCheckModal.vue'
import { useFoodStore } from '@/stores/foodDataStore'
import { useCustomizeStore } from '@/stores/customizeStore'
import { mapState } from 'pinia'
export default {
  data() {
    return {}
  },
  components: { NewClaimNtsModal, DoubleCheckModal },
  computed: {
    ...mapState(useFoodStore, ['onlyNewAddHeader', 'myProductList']),
    ...mapState(useCustomizeStore, [
      'customizeDataList',
      'myAddedNtsList',
      'filteredMyAddedNtsList',
    ]),
    noResultText() {
      if (
        this.myAddedNtsList.length === 0 &&
        this.filteredMyAddedNtsList.length === 0
      ) {
        return '目前無新增的營養素～'
      }
      if (
        this.myAddedNtsList.length === 0 &&
        this.filteredMyAddedNtsList.length > 0
      ) {
        return '搜尋結果：無符合的營養素～'
      } else {
        return ''
      }
    },
  },
  methods: {
    openAddNtsModal() {
      this.$refs.newClaimNtsModal.showModal()
    },
    openEditModal(index, item) {
      this.$refs.newClaimNtsModal.showModal(index, item)
    },
    openDoubleCheckModal(index, item) {
      this.$refs.doubleCheckModal.showDelAddedNtModal(index, item)
    },
    used(itemEnName) {
      let result = false
      this.customizeDataList.forEach(item => {
        if (item.newClaimNts) {
          item.newClaimNts.some(Nt => {
            if (Nt.enName === itemEnName) {
              result = true
            }
          })
        }
      })
      return result
    },
    productUsed(itemEnName) {
      let used = false
      this.myProductList?.forEach(item => {
        item.newClaimNts?.some(nt => {
          if (nt === itemEnName) {
            used = true
          }
        })
      })
      return used
    },
  },
}
</script>
<style lang="scss" scoped>
.bi-card-text {
  font-size: 75px;
}
</style>
