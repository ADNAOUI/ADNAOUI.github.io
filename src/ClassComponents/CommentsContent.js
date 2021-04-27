import React, { Component } from 'react';

class CommentsContent extends Component {
    render() {
        return (
            <div>
                <ol className="commentlist" id="commentlist">
                    <li classNameName="comment even thread-even depth-1" id="li-comment-1765770">
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
            </div>
        );
    }
}

export default CommentsContent;