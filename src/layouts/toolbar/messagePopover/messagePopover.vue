<template>
    <div>
        <q-btn flat round dense icon="fas fa-comment" class="q-mx-xs" >
            <q-badge v-if="getNumMsgUnread > 0" floating color="red">{{getNumMsgUnread}}</q-badge>
            <q-menu self="top right">
                <q-list bordered class="rounded-borders" style="max-width: 350px; min-width: 250px;">
                    <q-item-label header>{{$t('msgs.messages')}}</q-item-label>

                    <q-separator/>

                    <div v-if="getNumMsg === 0">
                        <q-item>
                            {{$t('msgs.nomessage')}}

                        </q-item>
                    </div>

                    <q-item clickable v-ripple v-for="(msg, index) in lasts_messages()" :key="index" @click="clickChat(msg)">

                        <q-item-section avatar>
                            <q-avatar>
                                <img :src="getImgByMsg(msg)" :alt="getUsernameChatByMsg(msg)">
                            </q-avatar>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label lines="1">{{getUsernameChatByMsg(msg)}}</q-item-label>
                            <q-item-label caption lines="2">
                                {{getMsgText(msg, false)}}
                            </q-item-label>
                        </q-item-section>

                        <q-item-section side top>
                            {{tools.getstrDateTimeShort(msg.datemsg)}}
                        </q-item-section>
                    </q-item>

                    <q-separator/>
                </q-list>
            </q-menu>
        </q-btn>
        <q-btn v-if="false" flat round dense icon="fas fa-bell">
            <q-badge v-if="getNumNotifUnread > 0" floating color="red">{{getNumNotifUnread}}</q-badge>
        </q-btn>
    </div>
</template>

<script lang="ts" src="./messagePopover.ts">
</script>
