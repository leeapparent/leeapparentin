<template>
  <avue-crud
    :data="data.data"
    :page="page"
    :option="option"
    @row-save="save"
    @row-update="update"
    @row-del="remove"
    @on-load="change"
    @sort-change="sortChange"
    @search-change="search"
  ></avue-crud>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class CourseEdit extends Vue {
  data = {};
  option = {};
  query = {
    limit: 10
  };
  page = {
    pageSize: 5,
    pageSizes: [2, 5, 10],
    total: 0
  };
  async fetchOptio() {
    const res = await this.$http.get("courses/option");
    this.option = res.data;
  }

  async change({ pageSize, currentPage }) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }
  async fetch() {
    const res = await this.$http.get("courses", {
      params: {
        query: this.query
      }
    });
    this.data = res.data;
    this.page.total = res.data.total;
  }
  async sortChange({ prop, order }) {
    if (order) {
      this.query.sort = null;
    } else {
      this.query.sort = {
        [prop]: order === "ascending" ? 1 : -1
      };
    }
    this.fetch();
  }

  async search(where) {
    for (let k in where) {
      const fidld = this.option.column.find(v => v.prop === k);
      if (fidld.regex) {
        where[k] = { $regex: where[k] };
      }
    }
    this.query.where = where;
    this.fetch();
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
