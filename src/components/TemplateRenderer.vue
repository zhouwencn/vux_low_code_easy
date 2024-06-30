<template>
  <div>
    <h1>{{ templateData.templateName }}</h1>
    <div v-for="section in templateData.layout.sections" :key="section.key">
      <component
        :is="getComponentType(section)"
        v-model="formData[section.key]"
        :data="section"
      ></component>
    </div>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";
import PickerComponent from "@/components/PickerComponent.vue";
export default {
  name: "TemplateRenderer",
  components: {
    InputComponent,
    PickerComponent,
  },
  data() {
    return {
      templateData: {
        templateName: "乡村振兴贷",
        layout: {
          sections: [
            // {
            //   key: "title",
            //   type: "header",
            //   content: "Welcome to the Example Template",
            // },
            // {
            //   type: "form",
            //   key: "form",
            //   fields: [
            //     {
            //       name: "Name",
            //       type: "text",
            //     },
            //     {
            //       name: "Email",
            //       type: "email",
            //     },
            //   ],
            // },
            {
              desc: "姓名",
              key: "name",
              type: "input",
              value: "",
              props: {
                placeholder: "请输入姓名",
              },
            },
            {
              desc: "身份证号",
              key: "idcard",
              type: "input",
              value: "",
              props: {
                placeholder: "请输入身份证号",
              },
            },
            {
              desc: "手机号",
              key: "mobileNo",
              type: "input",
              value: "",
              props: {
                placeholder: "请输入手机号",
              },
            },
            {
              desc: "民族",
              key: "folk",
              type: "picker",
              value: [],
              props: {
                placeholder: "请选择名族",
                options: [
                  {
                    name: "汉",
                    value: "1",
                  },
                  {
                    name: "满",
                    value: "2",
                  },
                ],
              },
            },
            {
              desc: "性别",
              key: "gender",
              type: "picker",
              value: [],
              props: {
                placeholder: "请选择性别",
                // options: [
                //   { value: "", text: "Select gender" },
                //   { value: "male", text: "Male" },
                //   { value: "female", text: "Female" },
                // ],
                options: [
                  {
                    name: "男",
                    value: "male",
                    parent: 0,
                  },
                  {
                    name: "女",
                    value: "female",
                    parent: 0,
                  },
                ],
              },
            },
          ],
        },
      },
      formData: {},
    };
  },
  created() {
    this.initializeFormData();
  },
  methods: {
    submit() {
      console.log(this.formData);
    },
    initializeFormData() {
      this.templateData.layout.sections.forEach((field) => {
        this.$set(this.formData, field.key, field.value);
        console.log("this.formData", this.formData);
      });
    },
    getComponentType(section) {
      const componentMap = {
        input: "InputComponent",
        picker: "PickerComponent",
      };
      return componentMap[section.type];
    },
  },
};
</script>
