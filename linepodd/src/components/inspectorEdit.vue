<template>
  <div class="pagecenter">
    <div class="p-grid">
      <div class="p-col-12 space"></div>
      <div class="p-col-12 text space">ชื่อผู้ดูแลหลัก</div>
      <div class="p-col-12 text space">หมายเลขติดต่อ</div>
      <div class="p-col-12 text space"><InputMask v-model="value" mask="99-999999" /></div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 text space">อสมใ/CG/นักบริบาล ที่ดูแล</div>
      <div class="p-col-12 text space">หมายเลขติดต่อ</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'inspectorEdit'
  // props: {
  //  msg: String
  // }
}
</script>

<style scoped>
.text {
  color: #000;
  font-size: 24px; 
  font-family: 'Prompt', sans-serif;
  
}
.space {
  height: 50px;
}
.pagecenter {
  padding: 16px 32px 16px 32px;
  width: 100%;
  text-align: left;
}
</style>
