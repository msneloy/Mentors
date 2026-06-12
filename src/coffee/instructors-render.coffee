###
  Instructors Renderer
###

document.addEventListener 'DOMContentLoaded', ->
  grid = document.querySelector '.instructors-grid'
  renderInstructors(grid) if grid

renderInstructors = (container) ->
  return unless container and window.INSTRUCTORS

  container.innerHTML = window.INSTRUCTORS.map((ins) ->
    """
    <div class="instructor-card">
      <div class="instructor-photo">
        <img src="#{ins.photo}" alt="#{ins.name}" />
      </div>
      <div class="instructor-name">#{ins.name}</div>
      <div class="instructor-qual">
        #{ins.qual}
      </div>
      <span class="instructor-score">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        IELTS Score &ndash; #{ins.score}
      </span>
    </div>
    """
  ).join('')
