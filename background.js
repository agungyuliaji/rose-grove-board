const members = [
  {
    name: 'agungyuliaji',
    color: '#fff4d4'
  },
  {
    name: 'tamatamvan',
    color: '#5bbee5'
  },
  {
    name: 'nmlindaa',
    color: '#f9d7ff'
  },
  {
    name: 'NurdelaArdiansyah',
    color: '#ffcbc3'
  }
]


const coloring = function() {
  $(members).each(function(index, member) {
    $(`.js-card-drag-container .text-gray-light:contains(${member.name})`).each(function(){
      var container = $(this).parents('.flex-auto.min-width-0.position-relative')
      container.css('background-color', member.color)
      container.find('.js-issue-note-reference .text-gray.d-block').remove()
      container.find('.js-details-target').remove()
      container.find('.js-task-list-container').next().hide()
      container.find('task-lists .js-comment-body').prepend(`<b>${member.name}</b>`)
      window.container = container
    })
  })
}

const observer = new MutationObserver(setTimeout(function(){ coloring() }, 3000));
const targetNode = document.querySelector('.js-project-columns');

const options = {
  attributes: true,
  subtree: true,
};

if (!!targetNode) {
  observer.observe(targetNode, options);
} else {
  throw new Error('.js-project-columns is missing');
}
