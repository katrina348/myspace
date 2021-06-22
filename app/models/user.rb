# frozen_string_literal: true

class User < ActiveRecord::Base
  serialize :befriended_humans, Array
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.random_human(ids)
    ids = ids.empty? ? [0] : ids
    Human.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.befriended(ids)
    ids = ids.empty? ? [0] : ids
    Human.where("id IN (?)", ids)
  end

  def random_human
    ids = self.befriended_humans.empty ? [0] :self.befriended_humans
    Human.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def befriended_humans
    ids = self.befriended_humans.empty ? [0] :self.befriended_humans
    Human.where("id IN (?)", ids)
    end
end
