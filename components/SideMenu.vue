<script setup>
const route = useRoute()

const props = defineProps({
  menulist: Array,
})

const isCollapse = ref(false)

const activeMenu = ref(route.path)

</script>

<template>
  <div>
    <div class="absolute z-1 -right-30px h-60px flex items-center cursor-pointer">
      <el-icon @click="isCollapse = !isCollapse"><Fold /></el-icon>
    </div>

    <el-menu :router="true" :default-active="activeMenu" class="el-menu-vertical w-200px" :collapse="isCollapse">
      <el-menu-item>LOGO</el-menu-item>
      <template v-for="item in props.menulist">
        <el-sub-menu :index="item.path" v-if="item.children" :key="item.name">
          <template #title>
            <el-icon><component :is="item.icon"/></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item :index="_item.path" v-for="_item in item.children">
            {{ _item.name }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item :index="item.path" v-else>
          <el-icon><component :is="item.icon"/></el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical {
  border-right: 0 none;
}
</style>
