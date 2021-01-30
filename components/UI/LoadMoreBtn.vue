<template>
    <div class="col-lg-12 mt">
        <div class="button">
            <button @click="$emit('MoreShows')">المزيد</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.button button {
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #fff;
  background: #ff5c5c;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  transition: 0.2s;
  font-weight: bold;
  outline: none;
}

.button button:hover {
  background-color: #e24f4f;
}

</style>