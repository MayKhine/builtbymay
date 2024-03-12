import * as stylex from "@stylexjs/stylex"
export const Home = () => {
  return (
    <div {...stylex.props(styles.base)}>
      <section {...stylex.props(styles.page1)}>
        <div {...stylex.props(styles.menubar)}>Menu bar</div>
        <h2>Page 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies, risus sit amet fermentum laoreet, est sem interdum quam,
          vitae tincidunt elit orci sed eros. Proin sed justo est. Nullam sit
          amet ornare urna. Etiam vestibulum dapibus tellus at ultrices. Etiam
          pulvinar sit amet orci ac sagittis. Phasellus a risus venenatis,
          tincidunt tellus a, aliquet metus. Integer rutrum congue elit eget
          blandit. Ut dapibus enim a turpis facilisis pretium. Duis velit lorem,
          dignissim nec dolor quis, egestas lacinia metus. Praesent finibus
          dolor orci, sed placerat nisl commodo vitae. Cras vestibulum tortor
          nec lacus mattis, vel fringilla ex sollicitudin. Integer consectetur
          dictum risus. Vestibulum mollis massa sed interdum tincidunt. Praesent
          vehicula ante et risus feugiat, id fringilla est bibendum.
        </p>
      </section>
      <section {...stylex.props(styles.page1)}>
        <div {...stylex.props(styles.menubar)}>Menu bar</div>

        <h2>Page 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies, risus sit amet fermentum laoreet, est sem interdum quam,
          vitae tincidunt elit orci sed eros. Proin sed justo est. Nullam sit
          amet ornare urna. Etiam vestibulum dapibus tellus at ultrices. Etiam
          pulvinar sit amet orci ac sagittis. Phasellus a risus venenatis,
          tincidunt tellus a, aliquet metus. Integer rutrum congue elit eget
          blandit. Ut dapibus enim a turpis facilisis pretium. Duis velit lorem,
          dignissim nec dolor quis, egestas lacinia metus. Praesent finibus
          dolor orci, sed placerat nisl commodo vitae. Cras vestibulum tortor
          nec lacus mattis, vel fringilla ex sollicitudin. Integer consectetur
          dictum risus. Vestibulum mollis massa sed interdum tincidunt. Praesent
          vehicula ante et risus feugiat, id fringilla est bibendum.
        </p>
      </section>
      <section {...stylex.props(styles.page1)}>
        <div {...stylex.props(styles.menubar)}>Menu bar</div>

        <h2>Page 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies, risus sit amet fermentum laoreet, est sem interdum quam,
          vitae tincidunt elit orci sed eros. Proin sed justo est. Nullam sit
          amet ornare urna. Etiam vestibulum dapibus tellus at ultrices. Etiam
          pulvinar sit amet orci ac sagittis. Phasellus a risus venenatis,
          tincidunt tellus a, aliquet metus. Integer rutrum congue elit eget
          blandit. Ut dapibus enim a turpis facilisis pretium. Duis velit lorem,
          dignissim nec dolor quis, egestas lacinia metus. Praesent finibus
          dolor orci, sed placerat nisl commodo vitae. Cras vestibulum tortor
          nec lacus mattis, vel fringilla ex sollicitudin. Integer consectetur
          dictum risus. Vestibulum mollis massa sed interdum tincidunt. Praesent
          vehicula ante et risus feugiat, id fringilla est bibendum.
        </p>
      </section>
      <section {...stylex.props(styles.page1)}>
        <div {...stylex.props(styles.menubar)}>Menu bar</div>

        <h2>Page 4</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies, risus sit amet fermentum laoreet, est sem interdum quam,
          vitae tincidunt elit orci sed eros. Proin sed justo est. Nullam sit
          amet ornare urna. Etiam vestibulum dapibus tellus at ultrices. Etiam
          pulvinar sit amet orci ac sagittis. Phasellus a risus venenatis,
          tincidunt tellus a, aliquet metus. Integer rutrum congue elit eget
          blandit. Ut dapibus enim a turpis facilisis pretium. Duis velit lorem,
          dignissim nec dolor quis, egestas lacinia metus. Praesent finibus
          dolor orci, sed placerat nisl commodo vitae. Cras vestibulum tortor
          nec lacus mattis, vel fringilla ex sollicitudin. Integer consectetur
          dictum risus. Vestibulum mollis massa sed interdum tincidunt. Praesent
          vehicula ante et risus feugiat, id fringilla est bibendum.
        </p>
      </section>
    </div>
  )
}

const styles = stylex.create({
  base: {
    scrollSnapType: "y mandatory",
    overflowY: "scroll",
    maxHeight: "100vh",
  },
  page1: {
    height: "100vh",
    backgroundColor: "gray",
    scrollSnapAlign: "start",
    // scrollSnapStop: "normal",
    scrollMarginTop: "30px",
  },
  page2: {
    backgroundColor: "pink",
  },
  page3: {
    backgroundColor: "lightblue",
  },
  page4: {
    backgroundColor: "gray",
  },

  menubar: {
    backgroundColor: "pink",
    height: "30px",
  },
})