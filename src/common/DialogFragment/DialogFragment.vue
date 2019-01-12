<template>
    <div class="mask" @click="cancel">
        <div class="contentWrap slideInUp animated" ref="contentWrap">
            <div class="slotWrap">
                <slot></slot>
            </div>
            <div class="item cancel" @click.stop="cancel">取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dialogFragment',
    data() {
        return {
            
        }
    },
    props: {
        isShow: Boolean
    },
    methods: {
        cancel(){
            this.$emit('cancel');
        }
    }
}


</script>

<style lang="less" scoped>
.mask{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: hsla(0, 0, 0, 0.4);
    overflow: hidden;
}
.contentWrap{
    position: absolute;
    min-height: 2rem;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ccc;
    z-index: 2;
}
.item{
    width: 100%;
    height: 1rem;
    font-size: .3rem;
    line-height: 1rem;
    text-align: center;
    background: white;
    border-top: 1px solid #ccc;
}
.cancel{
    margin-top: .2rem;
}
</style>

