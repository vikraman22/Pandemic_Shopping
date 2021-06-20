<!--Modal.vue-->

<script>
export default {
	name: 'Accept',
};
</script>
<template>
<transition name="modal-fade">
	<div class="modal-backdrop">
	<div class="modal"
		role="dialog"
		
	>
		<header
		class="modal-header"
		id="modalTitle"
		>
		<slot name="header">
			Modal Header: GeeksforGeeks
			<button
			type="button"
			class="close"
			@click="$emit('close')"  

			>
				X
			</button>
		</slot>
		</header>
		<section
		class="modal-body"
		id="modalDescription"
		>
		<slot name="body">
			Closing modal using vue.js
		</slot>
		</section>
	</div>
	</div>
</transition>
</template>
<style>
.modal-backdrop {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(133, 226, 100, 0.427);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal {
	background: #eeeeee;
	width: 50%;
	height: 30%;
	box-shadow: 2px 2px 20px 1px;
	overflow-x: auto;
	display: flex;
	flex-direction: column;
}

.modal-header{
	padding: 15px;
	display: flex;
}

.modal-header {
	border-bottom: 1px solid #eeeeee;
	font-size: 30px;
	color: #4AAE9B;
	justify-content: center;
}
.modal-body {
	position: relative;
	font-size: 30px;
	align-self: center;
	padding: 20px 10px;
}
.close {
	border: none;
	font-size: 30px;
	margin-left: 100px;
	cursor: pointer;
	font-weight: bold;
	color: #4AAE9B;
	background: transparent;
}
</style>
