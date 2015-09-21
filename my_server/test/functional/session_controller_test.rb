require 'test_helper'

class SessionControllerTest < ActionController::TestCase
  test "should get start" do
    get :start
    assert_response :success
  end

  test "should get info" do
    get :info
    assert_response :success
  end

  test "should get end" do
    get :end
    assert_response :success
  end

end
