import React from 'react'

function About() {
  return <>
    <div>
      <h2 className="has-text-centered is-size-3">About</h2>
    </div>
    <section>
      <div className="columns">
        <div className="column">
          <h3 className="has-text-centered is-size-4">Bio</h3>
          <p className="has-text-centered p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat, nisl quis elementum pellentesque, quam nulla pellentesque mauris, sed facilisis nibh turpis sit amet mauris. Nulla laoreet tempus risus accumsan egestas. Donec efficitur eros nec vulputate pellentesque. Duis ultrices posuere augue et posuere. Donec viverra, tellus eu aliquam venenatis, metus urna pellentesque est, efficitur varius ligula diam vitae lorem. Maecenas condimentum finibus felis, sit amet aliquet metus tincidunt quis.</p>
          <br />
          <p className="has-text-centered pr-3 pl-3 pb-3">Vestibulum leo massa, fermentum sed nulla a, rutrum tincidunt tellus. Pellentesque sit amet turpis id urna pharetra blandit. Vivamus varius justo nec diam laoreet, et sodales purus euismod. Quisque tincidunt varius odio. Morbi nec mi dui. Nulla ac purus purus. Ut dignissim erat quis urna aliquam luctus. Donec enim ante, egestas nec tortor vel, hendrerit dignissim leo. Ut sit amet massa in lorem sodales dignissim. Nam ullamcorper arcu sed libero pellentesque faucibus. Quisque bibendum semper arcu eu aliquam.</p>
        </div>
        <div className="column">
          <h3 className="has-text-centered is-size-4">Gary</h3>
          <div className="p-3">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
          </div>
          <p className="has-text-centered p-3">Vestibulum leo massa, fermentum sed nulla a, rutrum tincidunt tellus. Pellentesque sit amet turpis id urna pharetra blandit.</p>
        </div>
      </div>
    </section>
  </>
}

export default About