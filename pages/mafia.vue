<template>
  <div>

    <b-row >
      <div class="header">

        <h1>Комната: </h1>
        <div class="room-number">
          <span>65BE</span>
        </div>

      </div>
    </b-row>


    <b-row>
        <b-col lg="8">
          <CardList />
        </b-col>
        <b-col lg="4">
          <Control />
        </b-col>
    </b-row>

  </div>
</template>

<script>
import Control from '../components/Control';
import CardList from '../components/CardList';

export default {
  name: "mafia",
  components: {
    CardList,
    Control
  }
}
</script>

<style scoped>

.main {
  margin-top: 50px;
}

.header {
  height: 80px;
  vertical-align: middle;
  display: inline-block;
  line-height: 80px;
}

.header h1{
  display: inline-block;
}

.room-number {
  font-size: 32px;
  display: inline-block;
}

</style>
