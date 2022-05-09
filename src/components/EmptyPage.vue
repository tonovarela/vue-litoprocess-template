<template>
	<div class="grid">
		<div class="col-12">
			<div class="card">
				<h5>Empty Page</h5>
			</div>
		</div>
	</div>
</template>

<script>
import {useGeneralStore} from "@/store/General";

export default {
	setup(){
		const store = useGeneralStore();

    return  {
      store
    }
		
	}

}
</script>