<template>
<div>
  <table id="t01">
        <tr>
            <th>Expense</th>
            <th>Number Per Month</th>
            <th>Cost</th>
            <th>Pain Rating 1-5</th>
            <th>New Frequency per Month</th>
        </tr>
        <tr>
            <td><input v-on:keyup.delete="onDelete(index)" v-model="expense" placeholder="Coffee"/></td>
            <td><input type="number" v-model="numPerMonth" placeholder="25"/></td>
            <td><input type="number" v-model="cost" step=".01" placeholder="2.50"/></td>
            <td><input v-on:keyup.enter="onEnter()" v-on:keydown.tab="onTab()" type="number" v-model="painPoint" min="1" max="5" placeholder="5"/></td>
            <td></td>
        </tr>
        <tr v-for="(input, index) in inputs" v-bind:key="index">
            <td><input v-on:keyup.delete="onDelete(index)" v-model="input.expense"/></td>
            <td><input type="number" v-model="input.numPerMonth"/></td>
            <td><input type="number" v-model="input.cost" step=".01"/></td>
            <td><input v-on:keyup.enter="onEnter()" v-on:keydown.tab="onTab()" type="number" v-model="input.painPoint" min="1" max="5"/></td>
            <td></td>
            <button class="delete" v-on:click="deleteRow(index)">Delete</button>
        </tr>
    </table>
    <button v-on:click="addRow">Add row</button>
</div>
</template>

<script>
  export default{
      name: 'BudgetTable',

      data:function(){
          return{
              cost:"",
              painPoint:"",
              numPerMonth:"",
              expense:"",
              inputs:[],
              newFrequency: "",
          }
      },

    computed: {
      username() {
        return this.$route.params.username
      }
    },

    methods: {
        addRow() {
            this.inputs.push({
                expense: '',
                numPerMonth: '',
                painPoint: '',
                cost: ''
            })
        },

        deleteRow(index) {
            this.inputs.splice(index,1)
        },

      onEnter: function() {
        this.addRow()
        let numInput = Array.from(document.getElementsByTagName('input')).indexOf(document.activeElement)
        setTimeout(() => document.getElementsByTagName('input')[numInput+1].focus(), 0)
      },

      onTab: function() {
          this.addRow()
          let numInput = Array.from(document.getElementsByTagName('input')).indexOf(document.activeElement)
          setTimeout(() => document.getElementsByTagName('input')[numInput+1].focus(), 0)      
      },

      /* Thisneeds to only delete the row when the input is already empty
      onDelete: function(index) {
          this.deleteRow(index)
      },
      */

      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
input { 
    width:100%;
    height:100%;
    border-style: none;
}

textarea:focus, input:focus{
    outline: none;
}

td {
    border-style: solid;
    border-width: 1px;
}

.delete{
    background-color: #f44336;
    margin: 2px 2px 2px 2px;
}

.delete{
  opacity:0;
}

.delete:hover{
  opacity:100 !important;
}

button {
    background-color: #343b40;
    border-radius: 4px;
    color:white;
    border:none;
    margin: 2px 0px 2px 0px;
    padding: 2px 15px 2px 15px;
}
</style>