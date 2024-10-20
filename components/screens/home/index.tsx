import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Welcome! 👋</h1>
            <h2>Madayaw! | Maligayang Pagbati! | Mabuhay!</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
        I'm <a href="https://linkedin.com/in/aaalgieee" target="blank"><u>Gab</u></a> a Software Developer in Davao City. 
        Also, has the passion to make change in local tech community and a master of mental disguise. 
        I like anything minimal modern design, dogs, cars, and cinematography. 
        Now, diving world of iOS Developement using SwiftUI. <br/>I'm also one of the seven Founders & Events Lead of <a href="https://dicedvo.org" target="blank"><u>Davao Interschool Computer Enthusiats (DICE)</u></a>.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="blogs" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="works" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
