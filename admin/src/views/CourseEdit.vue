<template>
  <avue-crud
    :data="data.data"
    :option="option"
    @row-save="save"
    @row-update="update"
    @row-del="remove"
  ></avue-crud>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class CourseEdit extends Vue {
  data = {};
  option = {};
  async fetchOptio() {
    const res = await this.$http.get("courses/option");
    this.option = res.data;
  }

  async fetch() {
    const res = await this.$http.get("courses");
    this.data = res.data;
  }

  async save(row, done) {
    await this.$http.post("courses", row);
    this.$message.success("成功");
    this.fetch();
    done();
  }
  async update(row, index, done) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`courses/${row._id}`, data);
    this.$message.success("更新成功");
    this.fetch();
    done();
  }
  async remove(row) {
    try {
      await this.$confirm("是否删除");
    } catch (e) {
      return;
    }
    await this.$http.delete(`courses/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }
  created() {
    this.fetchOptio();
    this.fetch();
  }
}
</script>

<style></style>
