<template>
    <div class="all">
        <!-- 手机类 -->
        <PhoneAsm></PhoneAsm>
        <!-- 智能穿戴 -->
        <WearAsm></WearAsm>
        <!-- 智能家居 -->
        <Intelligence></Intelligence>
        <!-- 电视 -->
        <Tv></Tv>
        <!-- 厨房电器 -->
        <Kitchen></Kitchen>
        <!-- 智能生活电器 -->
        <Life></Life>

    </div>
</template>

<script>
import PhoneAsm from './content/PhoneAsm.vue'
import Intelligence from './content/IntelligenceAsm'
import WearAsm from './content/WearAsm.vue'
import Tv from './content/Tv.vue'
import Life from './content/Life.vue'
import Kitchen from './content/Kitchen.vue'

export default {
    name:'Content',
    components:{PhoneAsm,Intelligence,WearAsm,Tv,Life,Kitchen}
}
</script>

<style scoped>
    .all{
        margin-top: 30px;
        width: 100%;
        height: 4520px;
        background-color: #f5f5f5;
    }
</style>