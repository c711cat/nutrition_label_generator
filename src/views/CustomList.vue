<template>
  <div class="container">
    <h3 class="text-center mb-5">自定義品項列表</h3>
    <div class="text-end">
      <router-link to="/added_custom_nts" class="btn btn-outline-primary me-3">
        已新增營養素列表
      </router-link>
      <router-link to="/custom" class="btn btn-outline-primary">
        新增自定義品項
      </router-link>
    </div>

    <div
      v-for="(item, index) in updateCustomData"
      :key="item"
      class="border rounded row m-0 my-5 justify-content-between"
    >
      <section class="bg-light p-3 rounded col">
        <div class="d-flex">
          <p class="mb-0">品名</p>
          <i class="fst-normal">：</i>
          <p class="mb-0">{{ item.sample_name }}</p>
        </div>
        <div class="d-flex">
          <p class="mb-0">成分</p>
          <i class="fst-normal">：</i>
          <p class="mb-0">{{ item.content_description }}</p>
        </div>
      </section>
      <section class="col-auto d-flex justify-content-end p-3">
        <table class="border border-black">
          <thead>
            <tr class="border-bottom border-black">
              <th colspan="2" class="text-center fw-normal">營養標示</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-bottom border-black">
              <th></th>
              <td class="px-2">每 100 公克 / 毫升</td>
            </tr>
            <tr v-for="(value, key) in item.nutritionLabels" :key="key">
              <th
                class="px-2 fw-normal"
                :class="{
                  'ps-4': [
                    'trans_fat',
                    'total_sugar',
                    'saturated_fat',
                  ].includes(key),
                }"
              >
                {{ transText(key) }}
              </th>
              <td class="text-end px-2">
                {{ value }} {{ transUnitText(headerChineseAndEnglish[key]) }}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <div class="text-end my-3">
        <router-link
          :to="isPath(item.id)"
          @click="editCustomFood(item)"
          type="button"
          class="btn btn-outline-primary me-3"
        >
          編輯
        </router-link>
        <button
          @click="opendelModal(item, index)"
          type="button"
          class="btn btn-outline-danger me-1"
        >
          刪除
        </button>
      </div>
    </div>
  </div>
  <DoubleCheckModal ref="doubleCheckModal" />
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useCustomStore } from '@/stores/customStore'
import { useFoodStore } from '@/stores/foodDataStore'
import DoubleCheckModal from '@/components/DoubleCheckModal.vue'

export default {
  data() {
    return {
      updateCustomData: [],
    }
  },
  components: { DoubleCheckModal },
  computed: {
    ...mapState(useCustomStore, ['customDataList', 'customFood']),
    ...mapState(useFoodStore, ['headerChineseAndEnglish']),
  },
  watch: {
    customDataList: {
      handler(val) {
        if (val) {
          this.sortItem()
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions(useCustomStore, ['editCustomFood', 'delItemOfCustomList']),
    sortItem() {
      this.updateCustomData = this.customDataList
      this.updateCustomData.sort((a, b) => {
        return b.id - a.id
      })
      this.updateData()
    },
    updateData() {
      this.updateCustomData = this.customDataList.map(
        ({
          sample_name,
          content_description,
          category,
          id,
          ...nutritionLabels
        }) => {
          return {
            sample_name,
            content_description,
            category,
            id,
            nutritionLabels,
          }
        },
      )
    },

    transText(item) {
      const chineseAndUnit = this.headerChineseAndEnglish[item]
      const chinese = chineseAndUnit.replace(/\(.*\)/, '')
      const textMapping = {
        粗蛋白: '蛋白質',
        粗脂肪: '脂肪',
        總碳水化合物: '碳水化合物',
        糖質總量: '糖',
      }
      return textMapping[chinese] || chinese
    },
    transUnitText(unit) {
      const unitMapping = {
        kcal: '大卡',
        g: '公克',
        ug: '微克',
        mg: '毫克',
        IU: '國際單位',
      }
      const text = unit.match(/\((kcal|g|ug|mg|IU)\)/)
      if (text === null) {
        return ''
      } else {
        return unitMapping[text[1]]
      }
    },
    opendelModal(item, index) {
      this.$refs.doubleCheckModal.showDelCustomModal(item, index)
    },
    isPath(id) {
      return (this.$route.path = `/edit_custom/${id}`)
    },
  },
}
</script>
