json.array!(@testimonials) do |testimonial|
  json.extract! testimonial, :id, :comment, :author, :company
  json.url testimonial_url(testimonial, format: :json)
end
