<script>
export default {
  name: "App",
};
</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: none;
}

.btn {
  display: inline-block;
  margin: 0 8px;
  padding: 16px 32px;
  background: #3eaf7c;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.7;
}
</style>
