<template>
  <div class="pagecenter">
    <div class="p-grid">
      <div class="p-col-12 space"></div>
      <div class="p-col-12 text space">ชื่อผู้ดูแลหลัก</div>
      <div class="p-col-12 space text">
        <InputText
          style="padding-left: 16px; width: 100%"
          type="text"
          v-model="MainInspectorName"
          placeholder="กรุณากรอก ชื่อ และ นามสกุล"
        />
      </div>
      <div class="p-col-12 text space">หมายเลขติดต่อ</div>
      <div class="p-col-12 text space text">
        <InputMask
          style="padding-left: 16px; width: 100%"
          v-model="MainInspectorPhone"
          mask="999-9999999"
          placeholder="กรุณากรอก เบอร์โทร"
        />
      </div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 text space">อสม./CG/นักบริบาล ที่ดูแล</div>
      <div class="p-col-12 space text">
        <InputText
          style="padding-left: 16px; width: 100%"
          type="text"
          v-model="CGName"
          placeholder="กรุณากรอก ชื่อ และ นามสกุล"
        />
      </div>
      <div class="p-col-12 text space">หมายเลขติดต่อ</div>
      <div class="p-col-12 text space text">
        <InputMask
          style="padding-left: 16px; width: 100%"
          v-model="CGPhone"
          mask="999-9999999"
          placeholder="กรุณากรอก เบอร์โทร"
        />
      </div>
      <div class="p-col-12 space"></div>
      <div class="p-col-12 space"></div>
      <div class="p-col-4 space">
        <b-button class="text2" style="width: 120px; height: 60px"
          >ย้อนกลับ</b-button
        >
      </div>
      <div class="p-col-4 space"></div>
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
      MainInspectorName: '',
      MainInspectorPhone: '',
      CGName: '',
      CGPhone: ''
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
.space {
  height: 50px;
}
.cancel {
  text-align: end;
}
.pagecenter {
  padding: 16px 64px 16px 64px;
  width: 100%;
  text-align: left;
}
</style>
