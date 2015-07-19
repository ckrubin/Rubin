json.array!(@works) do |work|
  json.extract! work, :id, :title, :text, :image
  json.url work_url(work, format: :json)
end
