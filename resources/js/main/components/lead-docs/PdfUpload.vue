<template>
    <div class="pdf-content">

        <input v-if="myPdf === null" type="file" @change="handleFileChange" accept="application/pdf" />
        <div v-if="myPdf !== null">
            <PdfApp :config="config" page-scale="40" :page-number="1" style="height: 465px" :pdf="myPdf" ></PdfApp>
        </div>

    </div>
</template>

<script >
import PdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";
export default {
    components :{
        PdfApp
    },
    props: ['pdf_url'],
    data(){
        return {
            myPdf : null,
            config: {
                toolbar: false,
            }
        }
    },
    methods: {
        handleFileChange(event){
            const file = event.target.files[0];
            if (file && file.type === 'application/pdf') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.myPdf = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }
    }
}
</script>

<style>
.pdf-content{
    width: 100%;
}
</style>
