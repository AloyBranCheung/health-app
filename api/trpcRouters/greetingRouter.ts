// TODO: Delete file
import { router, procedure } from "./_app";

const greetingRouter = router({
  welcome: procedure.query(() => "welcome"),
});

export default greetingRouter;
