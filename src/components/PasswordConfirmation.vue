<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <p>Pour nous assurer de votre identité, veuillez confirmer votre mot de passe</p>
            </div>
            <div class="modal-body">
              <v-flashbag :flashbag="flashbag"/>
              <slot name="body">
                <v-text-field
                  v-model="password"
                  :rules="emptyRule"
                  type="password"
                  label="Mot de passe"
                  name="password"
                  autocomplete="current-password"
                  required/>
              </slot>
            </div>
            <v-btn
              class="text-xs-center"
              round
              color="warning"
              @click="cancel">Retour</v-btn>
            <v-btn
              class="text-xs-center"
              round
              color="success"
              @click="submit">Confirmer</v-btn>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccountConfirmPasswordVue',
  data () {
    return {
      password: '',
      flashbag: { show: false },
      emptyRule: [
        v => !!v || 'Champ obligatoire'
      ]
    }
  },
  methods: {
    submit () {
      if (this.password === 'admin') {
        this.$emit('confirmation', 'success')
      } else {
        this.flashbag = { show: true, type: 'error', message: 'Mot de passe erronné' }
      }
    },
    cancel () {
      console.log('cancel')
      this.$emit('confirmation', 'cancel')
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
