<template>
  <main class="mx-auto col-11 col-xxl-10">
    <h3 class="text-center mb-4">營養標示製作</h3>
    <section class="form-floating mb-5 mx-1">
      <input
        @change="e => searchFood(e.target.value)"
        type="search"
        class="form-control"
        id="searchInput"
        placeholder="請輸入食物成分搜尋"
      />
      <label for="searchInput">請輸入食物名稱搜尋</label>
    </section>
    <div class="col-12 ps-1">
      <div class="row col-12 mx-0 mb-5">
        <section class="bg-light py-2 border rounded-3 col-5 col-xl-3">
          <div class="d-flex flex-wrap justify-content-center mb-2">
            <button
              @click="showBuiltInDataBase"
              type="button"
              class="col-12 col-md m-1 me-1 btn btn-sm"
              :class="isBuiltIn ? 'btn-primary' : 'btn-outline-primary'"
            >
              內建資料庫
            </button>
            <button
              @click="showCustomizeDataBase"
              type="button"
              class="col-12 col-md m-1 me-1 btn btn-sm"
              :class="isCustomize ? 'btn-primary' : 'btn-outline-primary'"
            >
              自定義資料庫
            </button>
          </div>
          <section>
            <div
              v-if="
                filteredData.length === 0 && filteredCustomizeData.length === 0
              "
              class="py-5 text-center"
            >
              <p class="mb-2 fw-bold px-3">皆無相符品項</p>
              <p class="px-3">若該品項有營養標示，可自行新增資料</p>

              <button
                @click="openCustomizeBaseDataModal"
                type="button"
                class="btn btn-sm btn-outline-primary"
              >
                新增自定義資料
              </button>
            </div>
            <div v-else>
              <section
                v-if="isBuiltIn"
                class="list-group rounded visibleHeight overflow-y-auto overflow-x-hidden"
              >
                <button
                  v-for="item in filteredData"
                  :key="item.id"
                  @click="chooseSample(item)"
                  type="button"
                  class="list-group-item list-group-item-action px-1"
                  aria-current="true"
                >
                  <p class="mb-0 px-2">
                    {{ item.sample_name }}
                  </p>
                  <p v-if="item.common_name" class="mb-0 px-2 text-secondary">
                    俗名:{{ item.common_name }}
                  </p>
                  <p
                    v-if="item.content_description"
                    class="mb-0 px-2 text-secondary"
                  >
                    {{ item.content_description }}
                  </p>
                </button>
                <div v-if="filteredData.length === 0" class="mt-5 text-center">
                  <p class="mb-0 text-center fw-bold">內建資料庫中</p>
                  <p class="mb-0 text-center fw-bold">無相符品項</p>
                  <p class="px-3">若該品項有營養標示，可自行新增資料</p>
                  <button
                    @click="openCustomizeBaseDataModal"
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                  >
                    新增自定義資料
                  </button>
                </div>
              </section>
              <section
                v-if="isCustomize"
                class="list-group rounded visibleHeight overflow-y-auto overflow-x-hidden"
              >
                <button
                  v-for="item in filteredCustomizeData"
                  :key="item.id"
                  @click="chooseSample(item)"
                  type="button"
                  class="list-group-item list-group-item-action px-1"
                  aria-current="true"
                >
                  <p class="mb-0 px-2">{{ item.sample_name }}</p>
                  <p v-if="item.common_name" class="mb-0 px-2 text-secondary">
                    俗名：{{ item.common_name }}
                  </p>
                </button>
                <div
                  v-if="filteredCustomizeData.length === 0"
                  class="mt-5 text-center"
                >
                  <p class="mb-0 text-center fw-bold">自定義資料庫中</p>
                  <p class="mb-2 text-center fw-bold">無相符品項</p>
                  <p class="px-3">若該品項有營養標示，可自行新增資料</p>
                  <button
                    @click="openCustomizeBaseDataModal"
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                  >
                    新增自定義資料
                  </button>
                </div>
              </section>
            </div>
          </section>
        </section>

        <form
          id="form_id"
          @submit.prevent="submitForm"
          class="row mx-0 mt-2 pe-1 align-content-start col-7 col-xl formVisibleHeight overflow-y-auto"
          novalidate
        >
          <section class="col-12 col-xl-6 mb-3">
            <label
              for="productName"
              class="form-label fw-bold d-flex justify-content-start"
            >
              <div class="pe-1 d-flex align-items-center">
                <i class="text-danger fst-normal">＊</i>
              </div>
              商品名稱
            </label>
            <input
              v-model.trim="product.title"
              type="text"
              class="form-control"
              id="productName"
              placeholder="請輸入商品名稱"
              required
            />
            <div class="invalid-feedback">此欄位為必填</div>
          </section>
          <section class="col-12 col-xl-6 mb-3">
            <label
              for="number_of_copies"
              class="form-label fw-bold d-flex justify-content-start"
            >
              <div class="pe-1 d-flex align-items-center">
                <i class="text-danger fst-normal">＊</i>
              </div>
              以下食材總量共可製成幾份成品？
            </label>
            <input
              v-model="product.numberOfCopy"
              type="number"
              min="1"
              class="form-control"
              id="number_of_copies"
              placeholder="輸入共可製成幾份成品"
              required
            />

            <div class="invalid-feedback">此欄位為必填，且需大於等於 1</div>
          </section>
          <section class="col-12 col-xl-6 d-flex mb-3">
            <div class="col-12">
              <label
                for="net_weight"
                class="form-label fw-bold d-flex flex-wrap justify-content-start col-12"
              >
                <div class="pe-1 d-flex align-items-center">
                  <i class="text-danger fst-normal">＊</i>
                </div>
                每一份量
                <div
                  class="infoStyle px-3 text-secondary d-flex align-items-center"
                >
                  <span class="fw-normal">
                    <i class="bi bi-info-circle"></i>
                    將會顯示在營養標示上，每一份量的位置
                  </span>
                </div>
              </label>

              <div class="col-12 d-flex flex-wrap justify-content-between">
                <div class="col-12 col-xl-6">
                  <input
                    v-model="product.perPortionInfomation.perWeight"
                    type="number"
                    min="1"
                    class="form-control me-3"
                    id="net_weight"
                    placeholder="輸入克數或毫升數"
                    required
                  />
                  <div class="invalid-feedback">
                    此欄位為必填，且需大於等於 1
                  </div>
                </div>
                <div class="mt-2 col-12 col-xl-5 text-xl-center">
                  <div class="form-check form-check-inline">
                    <input
                      v-model="product.perPortionInfomation.unit"
                      class="form-check-input"
                      type="radio"
                      id="gram"
                      value="公克"
                    />
                    <label class="form-check-label" for="gram">公克</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="product.perPortionInfomation.unit"
                      class="form-check-input"
                      type="radio"
                      id="milliliter"
                      value="毫升"
                    />
                    <label class="form-check-label" for="milliliter">
                      毫升
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="col-12 col-xl-6 mb-3">
            <label
              for="product_quantity"
              class="form-label fw-bold d-flex flex-wrap justify-content-start"
            >
              <div class="pe-1 d-flex align-items-center">
                <i class="text-danger fst-normal">＊</i>
              </div>
              本包裝含幾份成品？
              <div
                class="infoStyle px-3 text-secondary d-flex align-items-center"
              >
                <span class="fw-normal">
                  <i class="bi bi-info-circle"></i>
                  將會顯示在營養標示上，本包裝含幾份的位置
                </span>
              </div>
            </label>

            <input
              v-model="product.productQty"
              type="number"
              min="1"
              class="form-control"
              id="product_quantity"
              placeholder="輸入本包裝含幾份成品"
              required
            />
            <div class="invalid-feedback">此欄位為必填，且需大於等於 1</div>
          </section>
          <section class="col-12">
            <p class="mb-0 py-2 fw-bold">
              <span class="text-danger">＊</span>
              從左邊資料庫點選成分，並填入各欄位所需資料
            </p>

            <ul
              v-for="(item, index) in product.ingredients"
              :key="item.id"
              class="border-top rounded-0 position-relative col-12 list-group list-group-horizontal-xl d-flex flex-wrap justify-content-between"
            >
              <li class="px-1 list-group-item col-12 col-xl-3 d-flex">
                <i class="pe-1 fst-normal">{{ index + 1 }}.</i>
                <div>
                  <p class="mb-0 col-10 col-sm-auto">
                    {{ item.sample_name }}
                  </p>
                  <p v-if="item.common_name" class="mb-0">
                    俗名:{{ item.common_name }}
                  </p>
                </div>
              </li>
              <li
                class="px-0 list-group-item col-12 col-xl-4 d-flex flex-column justify-content-center"
              >
                <input
                  v-model.trim="item.foodName"
                  type="text"
                  :id="'foodName' + index"
                  :disabled="item.details.category === '自定義'"
                  placeholder="輸入欲示於外包裝成分"
                  class="form-control"
                  required
                />
                <div class="invalid-feedback">此欄位為必填</div>
              </li>
              <li
                class="px-0 list-group-item col-12 col-xl-3 d-flex flex-column justify-content-center"
              >
                <input
                  v-model="item.grams"
                  type="number"
                  :id="'grams' + index"
                  min="0.1"
                  step="0.1"
                  placeholder="輸入該成分『 總克數 』"
                  class="form-control"
                  required
                />
                <div class="invalid-feedback">此欄位為必填，且需大於 0</div>
              </li>
              <li
                class="d-none d-xl-block list-group-item col-1 align-content-center"
              >
                <button
                  @click="delField(item)"
                  type="button"
                  class="btn btn-outline-danger btn-sm d-block"
                >
                  <i class="bi bi-x-lg"></i>
                </button>
              </li>
              <li
                class="d-block d-xl-none position-absolute delBtn-xs list-group"
              >
                <button
                  @click="delField(item)"
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                >
                  <i class="bi bi-x-lg"></i>
                </button>
              </li>
            </ul>
            <div class="my-3 col-12">
              <button
                type="button"
                class="btn btn-outline-primary w-100"
                @click="addNewField"
              >
                新增欄位
              </button>
            </div>
          </section>
        </form>
      </div>
      <div class="col-12 text-end mb-4 px-3">
        <button
          form="form_id"
          type="submit"
          class="col-12 col-xl-9 btn btn-primary"
        >
          送出以上資料
        </button>
      </div>
    </div>
    <CustomizeBaseDataModal ref="customizeBaseDataModal" />
  </main>
</template>

<script>
import { useFoodStore } from '@/stores/foodDataStore.js'
import { mapState, mapActions } from 'pinia'
import { useMsgStore } from '@/stores/messageStore'
import { useCustomizeStore } from '@/stores/customizeStore'
import CustomizeBaseDataModal from '@/components/CustomizeBaseDataModal.vue'
export default {
  data() {
    return {
      filteredData: [],
      alert: false,
      filteredCustomizeData: [],
      isBuiltIn: true,
      isCustomize: false,
    }
  },
  components: { CustomizeBaseDataModal },
  watch: {
    customizeModal: {
      handler(val) {
        if (val.switch === false && this.$route.path === '/nutrition_label') {
          this.showCustomizeDataBase()
          this.searchFood(val.title)
          document.getElementById('searchInput').value = val.title
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    ...mapState(useFoodStore, ['baseFoodData', 'product']),
    ...mapState(useCustomizeStore, ['customizeDataList', 'customizeModal']),
  },
  methods: {
    ...mapActions(useMsgStore, ['openAlert']),
    showBuiltInDataBase() {
      this.isBuiltIn = true
      this.isCustomize = false
    },
    showCustomizeDataBase() {
      this.isCustomize = true
      this.isBuiltIn = false
    },
    searchFood(food) {
      const data = []
      this.baseFoodData.filter(item => {
        if (
          (item.sample_name && item.sample_name.match(food)) ||
          (item.common_name && item.common_name.match(food))
        ) {
          data.push(item)
        }
      })
      this.filteredData = data
      const customizeData = []
      this.customizeDataList.filter(item => {
        if (item.sample_name && item.sample_name.match(food)) {
          customizeData.push(item)
        }
      })
      this.filteredCustomizeData = customizeData

      if (
        this.filteredData.length === 0 &&
        this.filteredCustomizeData.length !== 0
      ) {
        this.showCustomizeDataBase()
      }
      if (
        this.filteredData.length !== 0 &&
        this.filteredCustomizeData.length === 0
      ) {
        this.showBuiltInDataBase()
      }
    },
    chooseSample(chooseItem) {
      const empty = this.product.ingredients.find(item => {
        return item.sample_name === ''
      })
      if (empty) {
        empty.id = Date.now()
        empty.details = chooseItem
        empty.sample_name = chooseItem.sample_name
        if (chooseItem.common_name) {
          empty.common_name = chooseItem.common_name
        }
        if (empty.details.category === '自定義') {
          if (chooseItem.sample_name === chooseItem.content_description) {
            empty.foodName = chooseItem.sample_name
          } else {
            empty.foodName =
              chooseItem.sample_name +
              ' ( ' +
              chooseItem.content_description +
              ' ) '
          }
        }
      }
    },
    addNewField() {
      const newIngredient = {
        id: '',
        sample_name: '',
        foodName: '',
        grams: '',
        details: '',
      }
      this.product.ingredients.push(newIngredient)
    },
    delField(data) {
      const index = this.product.ingredients.indexOf(data)
      this.product.ingredients.splice(index, 1)
    },
    submitForm(e) {
      const form = e.target
      if (!form.checkValidity()) {
        // 若表單無效，添加樣式提示
        form.classList.add('was-validated')
        this.openAlert(true, '還有必填欄位喔！')
        return
      }
      if (this.product.id) {
        this.$router.push(`/edit_mark_items/${this.product.id}`)
      } else {
        this.$router.push('/mark_items')
      }
    },
    getAllData() {
      this.filteredData = this.baseFoodData
      this.filteredCustomizeData = this.customizeDataList
    },
    openCustomizeBaseDataModal() {
      this.$refs.customizeBaseDataModal.showModal()
    },
  },
  created() {
    this.getAllData()
  },
}
</script>

<style lang="scss" scoped>
ul.list-group {
  --bs-list-group-border-width: none;
}

.visibleHeight {
  height: 72vh;
}

.formVisibleHeight {
  height: 77vh;
}

.delBtn-xs {
  top: 2%;
  right: 0%;
}

.btn-outline-danger {
  border-color: rgba(255, 255, 255, 0) !important;
}

.infoStyle {
  font-size: 14px;
}
</style>
