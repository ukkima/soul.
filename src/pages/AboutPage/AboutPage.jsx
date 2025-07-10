import cls from "./aboutpage.module.scss";
import CatGif from "../../assets/gif/cat.gif";
import {
  siHtml5,
  siReact,
  siCss,
  siSass,
  siJavascript,
  siVite,
  siWebpack,
  siNodedotjs,
  siRedux,
  siPrettier,
  siEslint,
  siStylelint,
  siMongodb,
  siExpress,
  siTypescript,
  siTailwindcss,
  siGit,
  siNextdotjs,
} from "simple-icons";
import { SimpleIcon } from "../../components/SimpleIcon/SimpleIcon";

const icons = [
  siHtml5,
  siCss,
  siSass,
  siJavascript,
  siTypescript,
  siNodedotjs,
  siReact,
  siVite,
  siWebpack,
  siRedux,
  siPrettier,
  siEslint,
  siStylelint,
  siMongodb,
  siExpress,
  siTailwindcss,
  siGit,
  siNextdotjs,
];

export const AboutPage = () => {
  return (
    <section className={cls.about}>
      <div className="container">
        <div className={cls.about_intro}>
          <div className={cls.about_content}>
            <h1 className={cls.about_title}>Why hello there!</h1>
            <div className={cls.about_description}>
              <p className={cls.about_paragraph}>
                You probably already know my name — so let me just share who I
                am.
              </p>

              <p className={cls.about_paragraph}>
                I'm a full-stack developer from Ingushetia. I enjoy creating web
                platforms that make people’s lives a little easier, more
                connected, and more meaningful.
              </p>

              <p className={cls.about_paragraph}>
                I believe the Internet should remain open and free — and I do
                what I can as a developer to help keep that idea alive. Whether
                I'm writing backend logic or designing interfaces, I try to
                build things that are not just functional, but thoughtful.
              </p>

              <p className={cls.about_paragraph}>
                This isn't just what I do. It's how I think.
              </p>

              <p className={cls.about_p_s}>
                P.s such a beautiful gif, I couldn’t resist including it :^
              </p>
            </div>
          </div>

          <div className={cls.avatar}>
            <img src={CatGif} alt="cat" />
          </div>
        </div>
        <div className={cls.about_table}>
          <div className={cls.cell}>
            <h6 className={cls.cell_title}>Locations</h6>
            <div className={cls.cell_content}>Ingushetia</div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>Experience</h6>
            <div className={cls.cell_content}>1 year</div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>Superpower</h6>
            <div className={cls.cell_content}>
              Doing everything at the last minute
            </div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>Reading</h6>
            <div className={cls.cell_content}>
              The Choice by <br />
              Edith Eva Eger
            </div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>Hobby</h6>
            <div className={cls.cell_content}>
              Programming,
              <br />
              Reading
            </div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>Spirit animal</h6>
            <div className={cls.cell_content}>Lazy fox</div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>Use</h6>
            <div className={cls.cell_icons}>
              {icons.map((el) => (
                <SimpleIcon icon={el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
