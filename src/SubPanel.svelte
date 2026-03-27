<script>
  export let name = 'World';
  export let count = 1;
</script>

<div>
  <h2>Example Plugin {name}</h2>
  <p>Count: {count} {count === 1 ? 'time' : 'times'}.</p>
</div>

<!-- 该插件暂不支持
<style>
  .demo {
    padding: 10px;
    background: #f2f2f2;
    border-radius: 5px;
    font-family: sans-serif;
    text-align: center;
  }
</style>
-->
