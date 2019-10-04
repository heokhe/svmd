<script>
import { cls, subcls } from '../helpers';

export let active = false,
  left = 0,
  width = '100%';

$: c = cls('tab-indicator', { active });
$: contentC = subcls(c, 'content', { underline: true })
</script>

<span class={c}>
  <span class={contentC} style="transform: translateX({left}px); width: {width}"></span>
</span>
