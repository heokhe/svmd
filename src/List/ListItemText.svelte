<script>
  export let secondary = false;
</script>

<span class="mdc-list-item__{secondary ? 'secondary' : 'primary'}-text">
  <slot></slot>
</span>