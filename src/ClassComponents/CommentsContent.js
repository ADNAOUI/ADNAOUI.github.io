//----- MODULES -----//
import React, { Component } from 'react'

//----- STYLES -----//
import '../assets/css/CommentsContent.css'

class CommentsContent extends Component {
    render() {
        return (
            <div className="perimetreCommentsContent">
                <ol className="commentlist" id="commentlist">
                    <li className="comment even thread-even depth-1" id="li-comment-1765770">
                        <div className="comment-wrap" id="comment-1765770">
                            <div className="comment-author-wrap">
                                <div className="comment-author">Eelke</div>
                                <div className="comment-time"><a href="https://css-tricks.com/styling-comment-threads/#comment-1765770"><span className="screen-reader">Permalink to comment</span>#</a> <time datetime="2020-12-07T09:27:25-08:00">December 7, 2020</time></div>
                            </div>
                            <div className="comment-content">
                                <p>I feel that an important real-world requirement is that there is a limit to the nesting. As in, replying to a reply to a reply etc. at some point stops the indenting and use some other method to communicate a comment is a reply to another. Otherwise, at some point there would be no room<br/>
                                left for the comment. Any tips on that.
                                </p>
                            </div>
                            <div className="comment-actions">
                                <div className="reply">
                                    <a rel="nofollow" className="comment-reply-link" href="#comment-1765770" data-commentid="1765770" data-postid="326366" data-belowelement="comment-1765770" data-respondelement="respond" data-replyto="Reply to Eelke" aria-label="Reply to Eelke">Reply</a> 
                                </div>
                            </div>
                        </div>
                        <ul className="children">
                            <li className="comment odd alt depth-2" id="li-comment-1765774">
                            <div className="comment-wrap" id="comment-1765774">
                                <div className="comment-author-wrap">
                                    <div className="comment-author">qgustavor</div>
                                    <div className="comment-time"><a href="https://css-tricks.com/styling-comment-threads/#comment-1765774"><span className="screen-reader">Permalink to comment</span>#</a> <time datetime="2020-12-07T11:42:04-08:00">December 7, 2020</time></div>
                                </div>
                                <div className="comment-content">
                                    <p>You don’t need to limit nesting, you can work around that. As an example Reddit allows infinite nesting replacing deeply nested comment chains with “continue this thread” links to individual comment pages where the rest of the chain the be accessed. Twitter does something similar. There is also <a href="https://ux.stackexchange.com/questions/1712/" rel="nofollow ugc">this StackExchange question</a> with other examples. If you still prefer limiting nesting those can still serve as examples.</p>
                                </div>
                                <div className="comment-actions">
                                    <div className="reply"></div>
                                </div>
                            </div>
                            </li>
                            <li className="comment byuser comment-author-tahmidkhan bypostauthor even depth-2" id="li-comment-1765775">
                            <div className="comment-wrap" id="comment-1765775">
                                <div className="comment-author-wrap">
                                    <div className="comment-author">Tahmid</div>
                                    <div className="comment-time"><a href="https://css-tricks.com/styling-comment-threads/#comment-1765775"><span className="screen-reader">Permalink to comment</span>#</a> <time datetime="2020-12-07T12:55:21-08:00">December 7, 2020</time></div>
                                </div>
                                <div className="comment-content">
                                    <p>I definitely agree with what qgustavor said. At some level of nesting, you have to change the base level of nesting with a “Continue this thread” link. Horizontal scrolling with a minimum width is another option, but I don’t think that is very user friendly. I am not entirely sure about this, but there might be some merit to a further discussion that addresses this issue in details.</p>
                                </div>
                                <div className="comment-actions">
                                    <div className="reply"></div>
                                </div>
                            </div>
                            </li>
                            <li className="comment odd alt depth-2" id="li-comment-1765785">
                            <div className="comment-wrap" id="comment-1765785">
                                <div className="comment-author-wrap">
                                    <div className="comment-author">Ollie</div>
                                    <div className="comment-time"><a href="https://css-tricks.com/styling-comment-threads/#comment-1765785"><span className="screen-reader">Permalink to comment</span>#</a> <time datetime="2020-12-08T00:33:21-08:00">December 8, 2020</time></div>
                                </div>
                                <div className="comment-content">
                                    <p>The other option is to take the same approach as Slack, YouTube and even CSS Tricks – only allow one level of nested comments.</p>
                                    <p>Meaningful conversations can still happen, but it’s also easier to follow threads without falling into a nested rabbit hole of a conversation.</p>
                                </div>
                                <div className="comment-actions">
                                    <div className="reply"></div>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </li>
                    <li className="comment even thread-odd thread-alt depth-1" id="li-comment-1765802">
                        <div className="comment-wrap" id="comment-1765802">
                            <div className="comment-author-wrap">
                            <div className="comment-author">David King</div>
                            <div className="comment-time"><a href="https://css-tricks.com/styling-comment-threads/#comment-1765802"><span className="screen-reader">Permalink to comment</span>#</a> <time datetime="2020-12-08T12:26:50-08:00">December 8, 2020</time></div>
                            </div>
                            <div className="comment-content">
                            <p>Sounds like a job for sticky.</p>
                            <p>You could stick all parent comments so that context is maintained while scrolling. Thank me later</p>
                            </div>
                            <div className="comment-actions">
                            <div className="reply">
                                <a rel="nofollow" className="comment-reply-link" href="#comment-1765802" data-commentid="1765802" data-postid="326366" data-belowelement="comment-1765802" data-respondelement="respond" data-replyto="Reply to David King" aria-label="Reply to David King">Reply</a> 
                            </div>
                            </div>
                        </div>
                    </li>
                    <li className="comment odd alt thread-even depth-1" id="li-comment-1765808">
                        <div className="comment-wrap" id="comment-1765808">
                            <div className="comment-author-wrap">
                            <div className="comment-author">Dan F</div>
                            <div className="comment-time"><a href="https://css-tricks.com/styling-comment-threads/#comment-1765808"><span className="screen-reader">Permalink to comment</span>#</a> <time datetime="2020-12-08T14:50:29-08:00">December 8, 2020</time></div>
                            </div>
                            <div className="comment-content">
                            <p>A few nitpicks: maybe I’ve spent too much time on reddit, but that border on the left screams “collapse” to me. And I’ve generally found that the date and time of the comment are used for the deep link.</p>
                            <p>Nice article though!</p>
                            </div>
                            <div className="comment-actions">
                            <div className="reply">
                                <a rel="nofollow" className="comment-reply-link" href="#comment-1765808" data-commentid="1765808" data-postid="326366" data-belowelement="comment-1765808" data-respondelement="respond" data-replyto="Reply to Dan F" aria-label="Reply to Dan F">Reply</a> 
                            </div>
                            </div>
                        </div>
                        <ul className="children">
                            <li className="comment byuser comment-author-tahmidkhan bypostauthor even depth-2" id="li-comment-1765826">
                            <div className="comment-wrap" id="comment-1765826">
                                <div className="comment-author-wrap">
                                    <div className="comment-author">Tahmid</div>
                                    <div className="comment-time"><a href="https://css-tricks.com/styling-comment-threads/#comment-1765826"><span className="screen-reader">Permalink to comment</span>#</a> <time datetime="2020-12-09T04:57:51-08:00">December 9, 2020</time></div>
                                </div>
                                <div className="comment-content">
                                    <p>Hmm I definitely understand the point about Reddit. However, and this is entirely my point of view, I think the collapse function that Reddit implements is a bit of a weird UX unless you are specifically used to that setup. What I mean is that there is no visual indication that clicking on the border will actually collapse the comment, so the first time I did it, I was surprised. So might as well have that as a nice jump, and provide an actual visual or textual cue for the collapse to the user.</p>
                                </div>
                                <div className="comment-actions">
                                    <div className="reply"></div>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </li>
                </ol>
                <div className="respond">
                    <div className="comment-form-form-area">
                        <h3 id="reply-title" className="comment-reply-title">Leave a Reply <small><a id="cancel-comment-reply-link" href="/styling-comment-threads/#respond">Cancel reply</a></small></h3>
                        <form action="https://css-tricks.com/wp-comments-post.php" method="post" id="commentform" className="comment-form">
                            <p className="comment-notes">
                                <span id="email-notes">Your email address will not be published.</span> Required fields are marked <span class="required">*</span>
                            </p>
                            <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span>
                                <div id="markdown_comment" className="comment-content markdown-comment-preview"></div>
                                <div className="preview-buttons" id="preview-buttons">
                                    <a href="#0" id="writeCommentButton" className="commentPreviewButton active">Write</a>
                                    <a href="#0" id="previewCommentButton" className="commentPreviewButton">Preview</a>
                                </div>
                            </p>
                            <p className="comment-form-author">
                                <label for="author">Name <span className="required">*</span></label>
                                <input id="author" name="author" type="text" value="" size="30" maxlength="245" required="required"></input>
                            </p>
                            <p class="comment-form-email">
                                <label for="email">Email <span className="required">*</span></label>
                                <input id="email" name="email" type="email" value="" size="30" maxlength="100" aria-describedby="email-notes" required="required"/>
                            </p>
                            <p className="comment-form-url"><label for="url">Website</label> <input id="url" name="url" type="text" value="" size="30" maxlength="200"/></p>
                            <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"/> <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
                            <input type="hidden" name="_mc4wp_subscribe_wp-comment-form" value="0"/>
                            <p className="mc4wp-checkbox mc4wp-checkbox-wp-comment-form"><label><input type="checkbox" name="_mc4wp_subscribe_wp-comment-form" value="1" checked="checked"/><span>Get the CSS-Tricks newsletter</span></label></p>
                            <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" value="Post Comment"/> <input type="hidden" name="comment_post_ID" value="326366" id="comment_post_ID"/>
                                <input type="hidden" name="comment_parent" id="comment_parent" value="0"/>
                            </p>
                            <p><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" value="9f406328fe"/></p>
                            <p className="antispam-group antispam-group-q">
                                <label>Copy and paste this code: <strong className="antspmpro-input-a">micuno</strong> <span className="required">*</span></label>
                                <input type="hidden" name="antspmpro-a" className="antispam-control antispam-control-a" value="micuno"/>
                                <input type="text" name="antspmpro-q-luwele" class="antispam-control antispam-control-q" value="4.1"/>
                            </p>
                            <p class="antispam-group antispam-group-e">
                                <label>Leave this field empty</label>
                                <input type="text" name="antspmpro-e-email-url-website-luwele" className="antispam-control antispam-control-e" value=""/>
                            </p>
                            <textarea name="ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea>
                            <input type="hidden" id="ak_js" name="ak_js" value="1619546253883"></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default CommentsContent