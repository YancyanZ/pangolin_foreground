<template>
  <div class="layoutBackground">
    <div class="w">
      <img src="@/assets/training.png" class="icon" />
      <a-card style="width: 100%">
        <a-card title="实训筛选">
          <div slot="extra">
            <a href="#">在线工具箱</a>
            <a href="#">CTF技能树</a>
          </div>
          <div class="tags">
            <a-radio-group default-value="all" button-style="solid">
              <a-radio-button class="tags_btn" value="all"
                >所有类型</a-radio-button
              >
              <a-radio-button value="WEB">WEB</a-radio-button>
              <a-radio-button value="PWN">溢出</a-radio-button>
              <a-radio-button value="CRYPTO">密码学</a-radio-button>
              <a-radio-button value="MISC">杂项</a-radio-button>
              <a-radio-button value="RE">逆向</a-radio-button>
              <a-radio-button value="TEEN">TEEN</a-radio-button>
            </a-radio-group>
          </div>
          <div class="tags">
            <a-radio-group default-value="all" button-style="solid">
              <a-radio-button value="all">所有难度</a-radio-button>
              <a-radio-button value="easy">简单</a-radio-button>
              <a-radio-button value="middle">中等</a-radio-button>
              <a-radio-button value="hard">困难</a-radio-button>
            </a-radio-group>
          </div>
          <div class="tags">
            <a-radio-group default-value="all" button-style="solid">
              <a-radio-button value="all">所有环境</a-radio-button>
              <a-radio-button value="dynamic">动态环境</a-radio-button>
              <a-radio-button value="static">静态环境</a-radio-button>
              <a-radio-button value="docker">容器环境</a-radio-button>
              <a-radio-button value="link">外部环境</a-radio-button>
            </a-radio-group>
          </div>
          <div class="tags">
            <a-radio-group default-value="all" button-style="solid">
              <a-radio-button value="all">所有分类</a-radio-button>
              <a-radio-button value="wrong">已解决</a-radio-button>
              <a-radio-button value="right">未解决</a-radio-button>
            </a-radio-group>
          </div>
          <div class="tags">
            <a-radio-group default-value="all" button-style="solid">
              <a-radio-button value="all">所有标签</a-radio-button>
              <a-radio-button value="HTTP">HTTP协议</a-radio-button>
              <a-radio-button value="code_review">代码审计</a-radio-button>
              <a-radio-button value="SQL">SQL注入</a-radio-button>
              <a-radio-button value="code">编码</a-radio-button>
              <a-radio-button value="XSS">跨站攻击</a-radio-button>
              <a-radio-button value="upload">文件上传漏洞</a-radio-button>
              <a-radio-button value="include">文件包含漏洞</a-radio-button>
              <a-radio-button value="robots">信息泄露</a-radio-button>
              <a-radio-button value="comprehensive">综合</a-radio-button>
              <a-radio-button value="Android">Android逆向</a-radio-button>
              <a-radio-button value="peid">查壳/脱壳</a-radio-button>
              <a-radio-button value="reverse">逆向</a-radio-button>
              <a-radio-button value="steganography">隐写</a-radio-button>
              <a-radio-button value="file">文件分析</a-radio-button>
              <a-radio-button value="flow">流量分析</a-radio-button>
              <a-radio-button value="social_worker">社工</a-radio-button>
              <a-radio-button value="classical_cryptography"
                >古典密码</a-radio-button
              >
              <a-radio-button value="common">常见编码</a-radio-button>
              <a-radio-button value="symmetric">对称密码</a-radio-button>
              <a-radio-button value="autograph">签名算法</a-radio-button>
              <a-radio-button value="asymmetric">非对称密码</a-radio-button>
              <a-radio-button value="hash">散列密码</a-radio-button>
              <a-radio-button value="Teen">逻辑训练</a-radio-button>
              <a-radio-button value="pwn">溢出</a-radio-button>
            </a-radio-group>
          </div>
        </a-card>
        <a-card title="实训排序" style="margin-top: 10px">
          <div>
            <a-radio-group default-value="time" button-style="solid">
              <a-radio-button value="time">发布时间</a-radio-button>
              <a-radio-button value="num">解题人数</a-radio-button>
            </a-radio-group>
          </div>
        </a-card>
        <a-row>
          <a-col :span="6" v-for="item in trainingData" :key="item.id">
            <TrainingCard :training="item"></TrainingCard>
          </a-col>
        </a-row>
        <a-config-provider :locale="zh_CN">
          <a-pagination
            v-model="current"
            :total="total"
            :page-size-options="pageSizeOptions"
            :page-size="pageSize"
            show-size-changer
            show-less-items
            show-quick-jumper
            :show-total="(total) => `共 ${total} 条`"
            style="margin-top: 20px"
          >
            <template slot="buildOptionText" slot-scope="props">
              <span>{{ props.value }}条/页</span>
            </template>
          </a-pagination>
        </a-config-provider>
      </a-card>
    </div>
  </div>
</template>

<script>
import TrainingCard from '@/components/Home/TrainingCard.vue'
import { traningList } from '@/api/Home/training.js'
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  components: {
    TrainingCard
  },
  created() {
    this.getTrainingList()
  },
  data() {
    return {
      zh_CN,
      pageSizeOptions: ['8', '16', '24', '80'],
      pageSize: 8,
      current: 1,
      total: 670,
      trainingData: []
    }
  },
  methods: {
    // 获取实训列表
    async getTrainingList() {
      const { data: res } = await traningList()
      this.trainingData = res
    }
  }
}
</script>

<style>
.icon {
  height: 375px;
  margin-top: 70px;
}

.tags {
  margin-bottom: 10px;
}

.ant-radio-button-wrapper-checked {
  background: #f6ab39 !important;
  border-color: #f6ab39 !important;
}

.ant-radio-button-wrapper:hover {
  color: rgba(0, 0, 0, 0.65) !important;
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
  background-color: #fff !important;
}

.background {
}
</style>
