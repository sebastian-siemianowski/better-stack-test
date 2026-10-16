require "rails_helper"

RSpec.describe "Hello World" do
  it "prints Hello World" do
    message = "Hello World"

    puts message

    expect(message).to eq("Hello World")
  end
end
