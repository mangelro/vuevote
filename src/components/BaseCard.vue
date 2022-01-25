import { defineAsyncComponent } from '@vue/runtime-core';
<template>
    <article class="no-padding">
        <slot name="header">
        </slot>
        <div class="padding">
            <h5 class="no-margin">{{title}}</h5>
            <div>
                <slot name="content">
                {{content}}
                </slot>
            </div>
            <nav>
                <slot name='nav'>
                    <!--sin botones-->
                </slot>
            </nav>
        </div>
    </article>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:false,
            default:''
        }
    }
}
</script>
