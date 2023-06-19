<template>
  <div class="container mx-auto px-2">
    <h1 class="font-bold">ツリー</h1>
    <el-tree-v2 :data="data" :props="props" :height="208">
      <template #default="{ node }">
        <font-awesome-icon v-if="!node.isLeaf" icon="fa-folder" class="pr-2"/>
        <span>{{ node.label }}</span>
      </template>
    </el-tree-v2>
  </div>
</template>

<script lang="ts" setup>
interface Tree {
  id: string
  label: string
  children?: Tree[]
}

const props = {
  value: 'id',
  label: 'label',
  children: 'children'
}

const createData = (): Tree[] => [
  {
    id: '未分類',
    label: '未分類',
    children: [
      {
        id: '文書1',
        label: '文書1'
      },
      {
        id: '文書2',
        label: '文書2'
      }
    ]
  },
  {
    id: 'フォルダ1',
    label: 'フォルダ1',
    children: [
      {
        id: '文書3',
        label: '文書3'
      },
      {
        id: '文書4',
        label: '文書4'
      },
      {
        id: '文書5',
        label: '文書6'
      }
    ]
  },
  {
    id: 'フォルダ2',
    label: 'フォルダ2',
    children: [
      {
        id: '文書7',
        label: '文書7'
      }
    ]
  }
]

const data = createData()
</script>

<style></style>
