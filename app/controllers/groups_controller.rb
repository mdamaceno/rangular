class GroupsController < ApplicationController
  before_filter :set_group

  def index
    @groups = Group.all
    render json: @groups
  end

  private
  def set_group
    @group = Group.find(params[:id]) if params[:id]
  end
end
