<template>
    <div class="mypanel">

        <div v-if="!emailinviata">
            <q-banner
                    rounded
                    class="bg-primary text-white"
                    style="text-align: center;">
                <span class="mybanner">{{ $t('reset.title_reset_pwd')}}</span>
            </q-banner>
            <br>

            <q-field
                    :error="$v.form.email.$error"
                    :error-label="`${errorMsg('email', $v.form.email)}`"
            >
                <q-input
                        v-model="form.email"
                        autocomplete="email"
                        @change="val => { form.email = val }"
                        :before="[{icon: 'mail', handler () {}}]"
                        @blur="$v.form.email.$touch"
                        :error="$v.form.email.$error"
                        :float-label="$t('reg.email')"
                />
            </q-field>

            <div align="center">
                <q-btn rounded size="lg" color="primary" @click="submit" :disable="$v.$error">
                    {{$t('login.send_reset_pwd')}}
                </q-btn>
            </div>

        </div>
        <div v-else>
            <q-banner
                    rounded
                    class="bg-primary text-white"
                    style="text-align: center;">
                <span class="mybanner">{{ $t('reset.email_sent')}}</span>
            </q-banner>
            <br>

            <div>
                {{ $t('reset.check_email')}}
            </div>

        </div>


    </div>
</template>

<script lang="ts" >

  import {mapActions} from 'vuex'
  import * as types from '../../store/mutation-types'

  import {serv_constants} from '../../store/Modules/serv_constants'


  import Vue from 'vue'
  import { email, required } from "vuelidate/lib/validators"
  import { UserStore } from "../../store/Modules";
  import { IUserFields, IUserState } from "../../model"
  import { tools } from "../../store/Modules/tools";
  import { toolsext } from '@src/store/Modules/toolsext'
  export default class RequestResetPwd extends Vue{
    emailsent = false
    form: IUserFields = {
      email: '',
      tokenforgot: ''
    }

    created() {
      // this.load();
    }
    get emailinviata() {
        return this.emailsent
    }
    // validations: {
    //   form: {
    //     email: {
    //       required, email,
    //     },
    //   }
    // },

    submit() {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        tools.showNotif(this.$q, this.$t('reg.err.errore_generico'))
        return
      }

      this.$q.loading.show({message: this.$t('reset.incorso')})

      this.form.tokenforgot = ''

      console.log(this.form);
      UserStore.actions.requestpwd(this.form)
        .then((ris) => {
          if (ris.code === serv_constants.RIS_CODE_OK)
            this.emailsent = true
          this.$q.loading.hide()
        }).catch(err => {
        console.log("ERROR = " + err.error)
        this.$q.loading.hide()
      });

    }
  })

</script>

<style scoped>
    .mypanel {
        padding: 10px;
        margin: 10px;

    }
</style>
