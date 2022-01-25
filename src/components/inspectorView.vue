<template>
  <div class="pagecenter">
    <div class="p-grid">
      <div class="p-col-12 space"></div>
      <div class="p-col-12 text space">ชื่อผู้ดูแลหลัก</div>
      <div class="p-col-12 text3 space">{{ MainInspectorName }}</div>
      <div class="p-col-12 text space">หมายเลขติดต่อ</div>
      <div class="p-col-12 text3 space">{{ MainInspectorPhone }}</div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 text space">อสม./CG/นักบริบาล ที่ดูแล</div>
      <div class="p-col-12 text3 space">{{ CGName }}</div>
      <div class="p-col-12 text space">หมายเลขติดต่อ</div>
      <div class="p-col-12 text3 space">{{ CGPhone }}</div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 space"></div>
      <div class="p-col-4 space">
        <b-button class="text2" style="width: 120px; height: 60px"
          >ย้อนกลับ</b-button
        >
      </div>
      <div class="p-col-4 space edit">
        <b-button
          variant="success"
          class="text2"
          style="width: 120px; height: 60px"
          >แก้ไข</b-button
        >
      </div>
      <div class="p-col-4 space cancel">
        <b-button
          class="text2"
          style="width: 120px; height: 60px; background-color: #7746c3"
          >ถัดไป</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'inspectorEdit',
  // props: {
  //  msg: String
  // }
  data() {
    return {
      MainInspectorName: 'นาย สมศักดิ์ สมานเสมอ',
      MainInspectorPhone: '0800000001',
      CGName: 'นาง สุนี เลิศล้ำ',
      CGPhone: '0800000002'
    }
  }
}
</script>

<style scoped>
.text {
  color: #000;
  font-size: 24px;
  font-family: 'Prompt', sans-serif;
}
.text2 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-family: 'Prompt', sans-serif;
}
.text3 {
  padding-left: 16px;
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-family: 'Prompt', sans-serif;
}
.space {
  height: 50px;
}
.cancel {
  text-align: end;
}
.edit {
  text-align: center;
}
.pagecenter {
  padding: 16px 64px 16px 64px;
  width: 100%;
  text-align: left;
}
</style>
