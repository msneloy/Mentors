###
  English Skill Assessment Engine
###

PASSAGE_HTML = """
<h3>Why Misinformation Spreads Faster Than Facts</h3>
<p>False information spreads rapidly online. A study found that on social media, falsehoods are 70% more likely to be shared than true stories. The reason is partly psychological: false news often triggers strong emotions such as surprise, fear and anger, causing people to share impulsively before verifying content. At the same time, social media algorithms reward engagement – likes, comments and shares – rather than accuracy, so sensational headlines and exaggerated claims get far more visibility.</p>
<p>The real‑world consequences can be severe. During the COVID‑19 pandemic, misinformation about treatments and vaccines led some to avoid vaccination or try unproven remedies, resulting in preventable hospitalisations and deaths. Political misinformation similarly erodes trust and deepens social divisions.</p>
<p>Combating the problem requires a combination of strategies. Digital literacy programmes teach users to evaluate sources and spot clickbait. Independent fact‑checkers work to debunk viral falsehoods, yet the sheer volume of content makes it impossible to fact‑check every claim. Social media companies face pressure to adjust their algorithms, but so far changes have often been half‑hearted. The strongest defence, however, ultimately lies with individuals: making a habit of pausing before sharing, reading beyond headlines, and actively seeking credible sources.</p>
"""

QS = [
  {
    id: 1
    sec: 1
    type: "mcq"
    q: "According to the passage, why do emotional responses contribute to the spread of false information?"
    opts:
      A: "People enjoy sharing stories that make them feel sad."
      B: "Strong emotions cause people to share before checking facts."
      C: "Social media removes posts that are not emotional."
      D: "Factual information is written in a cold, technical style."
    ans: "B"
    exp: 'The passage states false news triggers strong emotions, causing people to "share impulsively before verifying content".'
  }
  {
    id: 2
    sec: 1
    type: "mcq"
    q: "What does the passage say about social media algorithms?"
    opts:
      A: "They are designed primarily to verify news accuracy."
      B: "They encourage the spread of content that gets reactions."
      C: "They explicitly block false stories once identified."
      D: "They have been completely redesigned to stop misinformation."
    ans: "B"
    exp: "Algorithms reward engagement (likes, comments, shares) rather than accuracy, encouraging content that gets reactions."
  }
  {
    id: 3
    sec: 1
    type: "mcq"
    q: "The COVID‑19 example is used to illustrate"
    opts:
      A: "how quickly vaccines were developed."
      B: "the positive side of health communication."
      C: "the dangerous real‑world effects of misinformation."
      D: "why governments should control the internet."
    ans: "C"
    exp: "The example shows real harm: people avoided vaccination and used unproven remedies, causing preventable deaths."
  }
  {
    id: 4
    sec: 1
    type: "mcq"
    q: "The writer mentions digital literacy programmes as"
    opts:
      A: "a perfect and complete solution."
      B: "one part of a broader strategy."
      C: "an approach that has already failed."
      D: "something only schools can provide."
    ans: "B"
    exp: 'Digital literacy is presented as one part of "a combination of strategies", not a complete solution.'
  }
  {
    id: 5
    sec: 1
    type: "mcq"
    q: 'What does the word "half‑hearted" in the final paragraph suggest about changes made by social media companies?'
    opts:
      A: "They are extremely effective."
      B: "They are made with genuine enthusiasm."
      C: "They are superficial and lack full commitment."
      D: "They are completely imaginary."
    ans: "C"
    exp: '"Half‑hearted" means lacking full effort — the changes are superficial, not fully committed.'
  }
  {
    id: 6
    sec: 1
    type: "mcq"
    q: "Which of the following is closest to the writer's overall message?"
    opts:
      A: "Misinformation is a minor problem that the media exaggerates."
      B: "Only governments can solve the problem of false news."
      C: "Stopping misinformation depends on education, platform changes, and individual responsibility."
      D: "Fact‑checkers alone can handle the issue if they get more funding."
    ans: "C"
    exp: "The overall message combines education, platform changes, and individual responsibility."
  }
  {
    id: 7
    sec: 1
    type: "text"
    q: "False news stories are often characterised by sensational headlines and exaggerated ___________________________."
    ph: "No more than two words from the passage…"
    ans: "claims"
    alt: ["claims"]
    exp: '"Sensational headlines and exaggerated claims" appears directly in the passage.'
  }
  {
    id: 8
    sec: 1
    type: "text"
    q: "During the pandemic, some people avoided vaccination and turned to unproven remedies, resulting in preventable hospitalisations and ___________________________."
    ph: "No more than two words from the passage…"
    ans: "deaths"
    exp: 'The passage mentions "preventable hospitalisations and deaths".'
  }
  {
    id: 9
    sec: 1
    type: "text"
    q: "The immense amount of content online makes it impractical to _____________________________ every claim."
    ph: "No more than two words from the passage…"
    ans: "fact-check"
    alt: ["fact-check", "fact‑check", "fact check"]
    exp: '"Impossible to fact‑check every claim" is used in the final paragraph.'
  }
  {
    id: 10
    sec: 1
    type: "text"
    q: "The most powerful tool against misinformation is the individual habit of pausing before _____________________________ and checking credible sources."
    ph: "No more than two words from the passage…"
    ans: "sharing"
    exp: 'The passage ends with "pausing before sharing".'
  }
  {
    id: 11
    sec: 2
    type: "mcq"
    q: "By the end of this year, she __________ at the company for a decade."
    opts:
      A: "has worked"
      B: "will have been working"
      C: "works"
      D: "has been working"
    ans: "B"
    exp: "Future perfect continuous is needed for an action continuing up to a future point."
  }
  {
    id: 12
    sec: 2
    type: "mcq"
    q: "If the team __________ more careful with the data, the mistake would not have happened."
    opts:
      A: "were"
      B: "had been"
      C: "would be"
      D: "would have been"
    ans: "B"
    exp: 'Third conditional requires past perfect "had been" in the if‑clause.'
  }
  {
    id: 13
    sec: 2
    type: "mcq"
    q: "The report, __________ summary was leaked to the press, remains confidential."
    opts:
      A: "which"
      B: "that"
      C: "whose"
      D: "who"
    ans: "C"
    exp: '"Whose" shows possession — the report\'s summary.'
  }
  {
    id: 14
    sec: 2
    type: "mcq"
    q: "I'd rather you __________ the decision until we have all the facts."
    opts:
      A: "postpone"
      B: "postponed"
      C: "will postpone"
      D: "are postponing"
    ans: "B"
    exp: 'After "I\'d rather + subject", use past simple (subjunctive): "postponed".'
  }
  {
    id: 15
    sec: 2
    type: "mcq"
    q: "__________ the traffic, we still managed to reach the airport on time."
    opts:
      A: "Although"
      B: "Despite"
      C: "Because"
      D: "Since"
    ans: "B"
    exp: '"Despite" is a preposition followed by a noun phrase. "Although" needs a clause.'
  }
  {
    id: 16
    sec: 2
    type: "mcq"
    q: "Not only __________ the exam, but he also scored the highest in the group."
    opts:
      A: "did he pass"
      B: "he passed"
      C: "he did pass"
      D: "passed he"
    ans: "A"
    exp: '"Not only" at the start requires subject‑auxiliary inversion: "did he pass".'
  }
  {
    id: 17
    sec: 2
    type: "text"
    q: "The scientists were amazed by the (DURABLE) ________________________ of the new material."
    ph: "Correct word form…"
    ans: "durability"
    exp: '"Durable" becomes the noun "durability".'
  }
  {
    id: 18
    sec: 2
    type: "text"
    q: "His constant (INTERRUPT) ________________________ during meetings frustrated his colleagues."
    ph: "Correct word form…"
    ans: "interruptions"
    alt: ["interruptions", "interrupting"]
    exp: '"Interrupt" forms the noun "interruptions".'
  }
  {
    id: 19
    sec: 2
    type: "text"
    q: "The manager gave a very (PERSUADE) ________________________ presentation that convinced everyone."
    ph: "Correct word form…"
    ans: "persuasive"
    exp: '"Persuade" becomes the adjective "persuasive".'
  }
  {
    id: 20
    sec: 2
    type: "text"
    q: "There was a (CONSIDER) ________________________ amount of work left to do before the deadline."
    ph: "Correct word form…"
    ans: "considerable"
    exp: '"Consider" becomes the adjective "considerable".'
  }
]

S = { idx: 0, ans: {}, timeLeft: 180000, timer: null, hlMode: false }

initTheme = ->
  saved = localStorage.getItem("theme") or "dark"
  document.documentElement.setAttribute "data-theme", saved

window.toggleTheme = ->
  next = if document.documentElement.getAttribute("data-theme") is "light" then "dark" else "light"
  document.documentElement.setAttribute "data-theme", next
  localStorage.setItem "theme", next

app = -> document.getElementById "app"
$ = (id) -> document.getElementById id

isCorrect = (q, ua) ->
  return false unless ua
  norm = (s) -> s.trim().toLowerCase().replace(/[\s\u2011\u2012\u2013-]/g, "")
  c = norm ua
  return norm(q.ans) is c if q.type is "mcq"
  return true if norm(q.ans) is c
  (q.alt or []).some (a) -> norm(a) is c

renderIntro = ->
  app().innerHTML = """
    <div class="intro">
      <div class="intro-brand">
        <img src="Media/Mentors-Noakhali-Branch-Logo.png" alt="Mentors' Noakhali Branch" />
      </div>
      <div class="intro-card">
        <h1>English Skill <em>Assessment</em></h1>
        <p class="intro-sub">Take our <strong>Free English, IELTS, &amp; PTE</strong> assessment to find your level and get a personalised course recommendation.</p>
        <div class="meta-row">
          <div class="meta-pill">#{svgClock()} 30 Minutes</div>
          <div class="meta-pill">#{svgDoc()} 20 Questions</div>
          <div class="meta-pill">#{svgStar()} Section 1: Reading &amp; Section 2: Grammar</div>
        </div>
        <div class="intro-rules">
          <h3>Instructions</h3>
          <ul>
            <li>Read the passage carefully before answering Questions 1–10.</li>
            <li>Use the Highlight tool to mark key lines in the passage.</li>
            <li>For Questions 7–10 &amp; 17–20, type your answer in the input field.</li>
            <li>You can navigate between questions freely using the number chips.</li>
            <li>The test will auto-submit when the timer reaches zero.</li>
            <li>Score ≥ 15 → IELTS recommended &nbsp;|&nbsp; Score &lt; 15 → Basic to IELTS recommended.</li>
          </ul>
        </div>
        <button class="btn-start" id="start-btn">#{svgPlay()} Start Assessment</button>
      </div>
    </div>
  """
  $("start-btn").onclick = startExam

startExam = ->
  S.idx = 0
  S.ans = {}
  S.timeLeft = 180000
  S.hlMode = false
  renderExam()
  startTimer()

renderExam = ->
  q = QS[S.idx]
  isReading = q.sec is 1
  isDark = (document.documentElement.getAttribute("data-theme") or "dark") isnt "light"

  app().innerHTML = """
    <div class="exam">
      <div class="topbar">
        <div class="topbar-logo">
          <img src="Media/Mentors-Noakhali-Branch-Logo.png" alt="Mentors' Noakhali Branch" />
        </div>
        <div class="sec-tabs">
          <div class="sec-tab #{if isReading then "on" else ""}">Section 1 — Reading</div>
          <div class="sec-tab #{if not isReading then "on" else ""}">Section 2 — Grammar</div>
        </div>
        <div class="topbar-right">
          <div class="timer" id="timer-display">#{fmtTime S.timeLeft}</div>
          <div class="theme-toggle" id="theme-toggle" onclick="toggleTheme()" aria-label="Switch Theme">
            <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            <div class="toggle-track">
              <div class="toggle-thumb"></div>
            </div>
            <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </div>
          <button class="btn-submit" id="submit-btn">Submit Test</button>
        </div>
      </div>
      <div class="exam-body" id="exam-body">
        #{if isReading then buildReadingLayout q else buildGrammarLayout q}
      </div>
      <div class="qnav" id="qnav">#{buildQNav()}</div>
    </div>
  """

  bindNavChips()
  bindOptions()
  bindFooterNav()
  $("submit-btn").onclick = -> showConfirm()
  setupHighlight() if isReading

buildQNav = ->
  h = '<span class="qnav-label">Reading</span>'
  QS.forEach (q, i) ->
    h += '<div class="qnav-sep"></div><span class="qnav-label">Grammar</span>' if i is 10
    cls = if i is S.idx then "cur" else if S.ans[q.id]? then "done" else ""
    h += "<div class=\"qchip #{cls}\" data-i=\"#{i}\">#{q.id}</div>"
  h

bindNavChips = ->
  document.querySelectorAll(".qchip").forEach (c) ->
    c.onclick = ->
      saveInput()
      S.idx = +c.dataset.i
      renderExam()

buildReadingLayout = (q) ->
  """
    <div class="reading-layout">
      <div class="pane-passage">
        <div class="pane-bar">
          <span class="pane-bar-title">Reading Passage</span>
          <div class="pane-tools">
            <span class="hl-hint" id="hl-hint"></span>
            <button class="hl-btn" id="hl-btn">#{svgHL()} Highlight</button>
          </div>
        </div>
        <div class="pane-scroll" id="passage-content">#{PASSAGE_HTML}</div>
      </div>
      <div class="pane-q">
        <div class="pane-q-scroll">#{buildQBody q}</div>
        #{buildQFooter()}
      </div>
    </div>
  """

buildGrammarLayout = (q) ->
  """
    <div class="grammar-layout">
      <div class="grammar-inner">
        #{buildQBody q}
        #{buildQFooter()}
      </div>
    </div>
  """

buildQBody = (q) ->
  label = if q.sec is 1 then "Section 1 — Reading" else "Section 2 — Grammar"
  body = "<div class=\"sec-badge\">#{label}</div><div class=\"q-text\">#{q.id}. #{q.q}</div>"
  if q.type is "mcq"
    body += '<div class="opts">'
    for l, t of q.opts
      sel = if S.ans[q.id] is l then "sel" else ""
      body += "<div class=\"opt #{sel}\" data-l=\"#{l}\"><div class=\"opt-ltr\">#{l}</div><div class=\"opt-txt\">#{t}</div></div>"
    body += "</div>"
  else
    val = esc(S.ans[q.id] or "")
    body += "<input class=\"txt-inp\" id=\"txt-inp\" type=\"text\" placeholder=\"#{q.ph}\" value=\"#{val}\" autocomplete=\"off\"/>"
  body

buildQFooter = ->
  isFirst = S.idx is 0
  isLast = S.idx is QS.length - 1
  """
    <div class="q-footer">
      <button class="btn-nav" id="btn-prev" #{if isFirst then "disabled" else ""}>#{svgLeft()} Previous</button>
      <span class="q-footer-info">Question #{S.idx + 1} of #{QS.length}</span>
      #{if isLast then "<button class=\"btn-nav-p\" id=\"btn-next\" onclick=\"showConfirm()\">Submit #{svgRight()}</button>" else "<button class=\"btn-nav-p\" id=\"btn-next\">Next #{svgRight()}</button>"}
    </div>
  """

bindFooterNav = ->
  prev = $ "btn-prev"
  next = $ "btn-next"
  if prev and not prev.disabled
    prev.onclick = ->
      saveInput()
      S.idx--
      renderExam()
  if next and S.idx < QS.length - 1
    next.onclick = ->
      saveInput()
      S.idx++
      renderExam()

bindOptions = ->
  document.querySelectorAll(".opt").forEach (opt) ->
    opt.onclick = ->
      S.ans[QS[S.idx].id] = opt.dataset.l
      document.querySelectorAll(".opt").forEach (o) -> o.classList.remove "sel"
      opt.classList.add "sel"
      updateQNav()

saveInput = ->
  inp = $ "txt-inp"
  S.ans[QS[S.idx].id] = inp.value.trim() or undefined if inp

updateQNav = ->
  nav = $ "qnav"
  if nav
    nav.innerHTML = buildQNav()
    bindNavChips()

setupHighlight = ->
  btn = $ "hl-btn"
  hint = $ "hl-hint"
  btn.onclick = ->
    S.hlMode = not S.hlMode
    btn.classList.toggle "on", S.hlMode
    hint.textContent = if S.hlMode then "Select text to highlight" else ""
    document.getElementById("passage-content").style.cursor = if S.hlMode then "text" else "default"

  document.addEventListener "mouseup", onUp = (e) ->
    return unless S.hlMode
    passage = $ "passage-content"
    unless passage
      document.removeEventListener "mouseup", onUp
      return
    sel = window.getSelection()
    return if not sel or sel.isCollapsed
    range = sel.getRangeAt 0
    return unless passage.contains range.commonAncestorContainer
    try
      mark = makeHL()
      range.surroundContents mark
    catch
      frag = range.extractContents()
      mark = makeHL()
      mark.appendChild frag
      range.insertNode mark
    sel.removeAllRanges()

makeHL = ->
  m = document.createElement "mark"
  m.className = "hl"
  m.title = "Click to remove highlight"
  m.onclick = (ev) ->
    p = m.parentNode
    p.insertBefore m.firstChild, m while m.firstChild
    p.removeChild m
    p.normalize()
    ev.stopPropagation()
  m

startTimer = ->
  clearInterval S.timer if S.timer
  S.timer = setInterval (->
    S.timeLeft -= 1
    el = $ "timer-display"
    if el
      el.textContent = fmtTime S.timeLeft
      totalSec = Math.floor S.timeLeft / 100
      el.className = "timer" + (if totalSec < 300 then " danger" else if totalSec < 600 then " warn" else "")
    if S.timeLeft <= 0
      clearInterval S.timer
      submitExam true
  ), 10

fmtTime = (cs) ->
  totalSec = Math.floor cs / 100
  mm = Math.floor totalSec / 60
  ss = totalSec % 60
  ms = cs % 100
  "#{String(mm).padStart(2, "0")}:#{String(ss).padStart(2, "0")}:#{String(ms).padStart(2, "0")}"

window.showConfirm = ->
  saveInput()
  answered = QS.filter((q) -> S.ans[q.id] isnt undefined).length
  unanswered = QS.length - answered
  overlay = document.createElement "div"
  overlay.className = "overlay"
  overlay.id = "confirm-overlay"
  overlay.innerHTML = """
    <div class="overlay-card">
      <h3>Submit Assessment?</h3>
      <p>You have answered <strong>#{answered}</strong> of <strong>#{QS.length}</strong> questions.#{if unanswered > 0 then "<br><span style=\"color:var(--or)\">#{unanswered} question(s) unanswered.</span>" else ""}</p>
      <div class="overlay-btns">
        <button class="btn-r" id="cancel-submit">Cancel</button>
        <button class="btn-rp" id="confirm-submit">Submit Now</button>
      </div>
    </div>
  """
  document.body.appendChild overlay
  $("cancel-submit").onclick = -> overlay.remove()
  $("confirm-submit").onclick = ->
    overlay.remove()
    submitExam false

submitExam = (timeout) ->
  if S.timer
    clearInterval S.timer
    S.timer = null
  score = 0
  QS.forEach (q) -> score++ if isCorrect q, S.ans[q.id]
  renderResults score, timeout

renderResults = (score, timeout) ->
  ielts = score >= 15
  cId = if ielts then "ielts-advanced" else "ielts"
  cName = if ielts then "IELTS — Academic & General" else "Basic to IELTS"
  cDesc = if ielts then "Your score shows a solid English foundation. We recommend jumping straight into intensive IELTS preparation to focus on exam strategy and mock tests." else "A high IELTS band requires strong grammar and reading skills. We recommend starting with our Basic to IELTS programme to build your core language skills first."
  dashOffset = 476 - (476 * score / 20)
  isDark = (document.documentElement.getAttribute("data-theme") or "dark") isnt "light"

  app().innerHTML = """
    <div class="exam" style="overflow:hidden">
      <div class="topbar">
        <div class="topbar-logo">
          <img src="Media/Mentors-Noakhali-Branch-Logo.png" alt="Mentors' Noakhali Branch" />
        </div>
        <div class="topbar-right">
          <div class="theme-toggle" id="theme-toggle" onclick="toggleTheme()" aria-label="Switch Theme">
            <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            <div class="toggle-track">
              <div class="toggle-thumb"></div>
            </div>
            <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </div>
          <button class="btn-r" onclick="window.retakeTest()">Retake Test</button>
        </div>
      </div>
      <div class="results-wrap">
        <div class="results-card">
          <h2>Your Results</h2>
          #{if timeout then "<div class=\"timeout-banner\">⏱ Time limit reached — test auto-submitted.</div>" else ""}
          <div class="ring-wrap">
            <svg width="170" height="170" viewBox="0 0 170 170">
              <circle class="ring-bg" cx="85" cy="85" r="75"/>
              <circle class="ring-fill" id="ring-fill" cx="85" cy="85" r="75"/>
            </svg>
            <div class="ring-label">
              <span class="ring-score">#{score}</span>
              <span class="ring-total">/ 20</span>
            </div>
          </div>
          <div class="rec-card">
            <div class="rec-badge">RECOMMENDED COURSE</div>
            <div class="rec-title">#{cName}</div>
            <p class="rec-desc">#{cDesc}</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
              <a class="btn-rp" href="course-detail.html##{cId}" target="_blank">View Course</a>
              <a class="btn-r" href="tel:+8801321207486">#{svgPhone()} Call Reception</a>
            </div>
          </div>
          <div class="results-btns">
            <button class="btn-r" onclick="window.retakeTest()">Retake Test</button>
            <button class="btn-r" id="review-toggle-btn">Review Answers</button>
          </div>
          <div id="review-container" style="display:none">
            <div class="review-sec">
              <h3>Detailed Answer Review</h3>
              #{buildReview()}
            </div>
          </div>
        </div>
      </div>
    </div>
  """

  setTimeout (->
    ring = $ "ring-fill"
    ring.style.strokeDashoffset = dashOffset if ring
  ), 100

  $("review-toggle-btn").onclick = ->
    rc = $ "review-container"
    hidden = rc.style.display is "none"
    rc.style.display = if hidden then "block" else "none"
    @textContent = if hidden then "Hide Review" else "Review Answers"
    setTimeout (-> rc.scrollIntoView behavior: "smooth"), 50 if hidden

window.retakeTest = -> renderIntro()

buildReview = ->
  QS.map((q) ->
    ua = S.ans[q.id] or ""
    ok = isCorrect q, ua
    display_ua = if ua then ua else "(no answer)"
    display_ans = q.ans
    if q.type is "mcq"
      display_ua = if ua then "#{ua}. #{q.opts[ua] or ""}" else "(no answer)"
      display_ans = "#{q.ans}. #{q.opts[q.ans]}"
    secLabel = if q.sec is 1 then "Reading" else "Grammar"
    """
      <div class="rq">
        <div class="rq-head">
          <span class="rq-num">Q#{q.id} — #{secLabel}</span>
          <span class="rq-badge #{if ok then "ok" else "no"}">#{if ok then "CORRECT" else "INCORRECT"}</span>
        </div>
        <div class="rq-q">#{q.q}</div>
        <div class="rq-ans-grid">
          <div class="rq-ans">
            <div class="rq-ans-label">Your Answer</div>
            <div class="rq-ans-val" style="color:#{if ok then "var(--gn)" else "var(--rd)"}">#{esc display_ua}</div>
          </div>
          <div class="rq-ans">
            <div class="rq-ans-label">Correct Answer</div>
            <div class="rq-ans-val" style="color:var(--gn)">#{display_ans}</div>
          </div>
        </div>
        <div class="rq-exp"><strong>Explanation:</strong> #{q.exp}</div>
      </div>
    """
  ).join ""

esc = (s) ->
  String(s or "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

svgClock = -> """<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>"""
svgDoc = -> """<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>"""
svgStar = -> """<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>"""
svgPlay = -> """<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>"""
svgHL = -> """<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>"""
svgLeft = -> """<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>"""
svgRight = -> """<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>"""
svgSun = -> """<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>"""
svgMoon = -> """<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>"""

svgPhone = -> """<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-bottom:-2px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>"""

document.addEventListener "DOMContentLoaded", ->
  document.body.classList.add "assessment-page"
  initTheme()
  renderIntro()
