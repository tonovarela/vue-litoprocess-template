<template>
	<div class="layout-footer">
		<img alt="Logo" :src="storeGeneral.getLogo" height="20" class="mr-2" />
	</div>
</template>
<script>
	import {useGeneralStore} from "@/store/General";
  export default {
    setup(){
      const storeGeneral = useGeneralStore();
      return {
        storeGeneral
      }
    }
	}
</script>