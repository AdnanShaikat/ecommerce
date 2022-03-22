<template>
  <div class="flex h-screen top">
    <AdminSidebar />
    <div class="flex-grow h-screen overflow-hidden">
      <AdminHeader />
      <main class="main bg-gray-100 p-4">
        <Nuxt></Nuxt>
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main {
  height: calc(100vh - 100px);
  overflow: auto;
}
</style>