<template>
  <div class="w container">
    <a-layout>
      <a-layout-content style="background-color: white">
        <a-card title="实训名称" style="width: 90%">
          <a-form
            :form="trainingInfo"
            :label-col="{ span: 2, offset: 1 }"
            :wrapper-col="{ span: 10 }"
            labelAlign="left"
          >
            <a-form-item label="实训详情">
              <span class="ant-form-text">{{ trainingInfo.description }}</span>
            </a-form-item>
            <a-form-item label="创建环境">
              <a-button v-if="!dockerState" @click="handleCreateDocker"
                >点击创建</a-button
              >
              <div v-if="dockerState">
                <a
                  :href="dockerURL"
                  target="_blank"
                  style="margin-right: 10px"
                  >{{ dockerURL }}</a
                >
                <a-button @click="handleCloseDocker">点击销毁</a-button>
              </div>
            </a-form-item>

            <a-row>
              <a-col :span="8" :offset="8">
                <a-col :span="14">
                  <a-input
                    v-model="trainingInfo.code"
                    placeholder="验证码"
                    size="middle"
                  />
                </a-col>
                <a-col :span="8" :offset="2">
                  <img class="captcha" :src="codeUrl" />
                </a-col>
              </a-col>
            </a-row>
            <a-row style="margin-top: 10px">
              <a-col :span="6" :offset="9">
                <a-input
                  v-model="subForm.answer"
                  placeholder="flag{}"
                  size="middle"
                />
              </a-col>
            </a-row>
            <a-row>
              <a-col
                :span="8"
                :offset="8"
                style="text-align: center; margin-top: 10px"
              >
                <a-button @click="handleSubmit">提交答案</a-button>
              </a-col>
            </a-row>
          </a-form>
        </a-card>
      </a-layout-content>
      <a-layout-sider theme="light" :width="300">
        <a-descriptions bordered size="small" :column="1">
          <a-descriptions-item label="UserName">
            Zhou Maomao
          </a-descriptions-item>
          <a-descriptions-item label="sss"> Zhou Maomao </a-descriptions-item>
          <a-descriptions-item label="dddd"> Zhou Maomao </a-descriptions-item>
        </a-descriptions>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script>
import { getCodeImg } from '@/api/login.js'
import {
  createDocker,
  closeDocker,
  submitAnswer
} from '@/api/Training/docker.js'

export default {
  data() {
    return {
      // 验证码图片
      codeUrl: '',
      dockerState: false,
      dockerName: 'redis',
      containerid: '',
      dockerURL: '',
      trainingInfo: {
        description: 'hihihi'
      },
      subForm: {
        code: '',
        uuid: '',
        answer: ''
      }
    }
  },
  created() {
    // 获取验证码图片
    // this.getCode()
  },
  methods: {
    // 获取验证码图片
    async getCode() {
      const { data: res } = await getCodeImg()
      this.codeUrl = 'data:image/gif;base64,' + res.img
      this.trainingInfo.uuid = res.uuid
    },
    async handleCreateDocker() {
      const { data: res } = await createDocker(this.dockerName)
      this.dockerURL = res.url
      this.containerid = res.containerid
      this.dockerState = true
    },
    async handleCloseDocker() {
      const { data: res } = await closeDocker(this.containerid)
      this.dockerState = false
    },
    async handleSubmit() {
      if (this.subForm.answer == '') {
        alert('请输入flag')
        return false
      }
      const saveForm = JSON.parse(JSON.stringify(this.subForm))
      const { data: res } = await submitAnswer(saveForm)
      if (res.code == 201) alert('flag正确')
      else alert('flag错误')
    }
  }
}
</script>

<style lang="less" scope>
.container {
  padding-top: 10px;
  height: 800px;
}

.captcha {
  display: block;
  width: 100%;
  height: 30px;
}
</style>
