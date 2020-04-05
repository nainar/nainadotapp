import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import { withAmp } from 'next/amp'

export const config = { amp: true };

const Newsletter = props => (
    <div>
        <Head>
        <title>Naina Raisinghani</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💩</text></svg>" />
        <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
        <script async key="amp-form" custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
            />
        </Head>
        <style jsx>{`
            @font-face {
                font-family: 'Bai Jamjuree';
                font-style: sans-serif;
                src: url('https://fonts.googleapis.com/css?family=Bai+Jamjuree');
            }
            footer {
                font-family: 'Bai Jamjuree', sans-serif;
                position: fixed;
                height: 3em;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #a77be48a;
                text-align: center;
                padding: 1vh 0 1vh 0;
            }
        `}</style>
        <form class="sample-form" method="POST" action-xhr="https://app.us20.list-manage.com/subscribe/post?u=c27d0495837c8265254d742b4&amp;id=c0a007ee8f" target="_blank">
            <input type="email"
                name="email"
                placeholder="Email..."
                required />
            <input type="submit"
                value="Subscribe" />
            <div submit-success>
                <template type="amp-mustache">
                Success! Thanks  for trying the <code>amp-form</code> demo! Try to insert the word "error" as a name input in the form to see how <code>amp-form</code> handles errors.
                </template>
            </div>
            <div submit-error>
                <template type="amp-mustache">
                Error! Thanks  for trying the <code>amp-form</code> demo with an error response.
                </template>
            </div>
        </form>
    </div>
);

export default Newsletter;