import cls from "./articlepage.module.scss";

export const ArticlePage = () => {
  return (
    <article className={cls.article}>
      <div className="container">
        <div className={cls.article__wrapper}>
          <span className={cls.create_time}>10 July, 2025</span>
          <h1 className={cls.title}>My burnout story.</h1>
          <div className={cls.image}>
            <img src="/sad_programmer.png" alt="image" />
          </div>
          <p className={cls.text_content}>
            For two years, I experienced a deep and persistent burnout that left
            me almost completely disconnected from programming — something that
            had once been not just a career but a passion. It wasn’t an
            overnight collapse. The process was slow, creeping in gradually
            until I barely recognized myself. What began as mild procrastination
            slowly evolved into complete emotional exhaustion. I stopped feeling
            joy when building things, and the very thought of opening a code
            editor filled me with dread. It wasn’t just about losing motivation
            — it felt like I was losing a part of my identity. At first, I
            didn’t even call it burnout. I thought I was just being lazy or
            unproductive. I tried the usual tricks: setting new goals, changing
            my environment, even trying out new programming languages in the
            hope that novelty would rekindle my interest. I made countless to-do
            lists, downloaded productivity apps, and watched motivational
            videos. But nothing really worked. Instead of getting better, things
            only got worse. The more I pushed myself, the deeper I sank into
            frustration and guilt. I felt like I was failing — not just
            professionally, but personally. Eventually, I realized that I
            couldn’t solve the problem by doing more. I needed to do less. I
            made the difficult decision to step away from programming
            completely. I gave myself permission to take a real break — not just
            a vacation or a weekend off, but a long, open-ended pause with no
            pressure to produce anything. For a while, I did nothing
            tech-related at all. I read books, went on walks, explored hobbies
            that had nothing to do with computers. I felt lost at times, but
            also free. During this time, I began to reflect more deeply. Why did
            I start programming in the first place? What had changed? I realized
            that over the years, I had turned something I loved into something I
            felt obligated to do. The constant pressure to keep up, to improve,
            to stay relevant — it had drained the joy from the process. I had
            stopped building things for fun and started measuring my worth in
            lines of code, deadlines, and external validation. Recovery wasn’t
            instant. It came slowly, in small pieces. One day, I found myself
            writing a little script just for fun. No expectations, no audience —
            just curiosity. That moment was a turning point. Gradually, I
            started to reconnect with programming, but this time on my own
            terms. I focused on what felt meaningful rather than what seemed
            impressive. I embraced simplicity and gave myself space to learn,
            make mistakes, and rediscover wonder. Looking back, those two years
            taught me a lot — not just about burnout, but about myself. I
            learned that rest is not laziness, that stepping back can be a form
            of strength, and that sometimes the best way forward is to stop
            trying to push through. Today, I still have ups and downs, but I’ve
            rebuilt a healthier relationship with programming. I no longer see
            it as a burden. I see it as a craft — one I’m allowed to grow into
            at my own pace.
          </p>
        </div>
      </div>
    </article>
  );
};
