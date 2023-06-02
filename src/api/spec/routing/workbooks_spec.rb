# frozen_string_literal: true

describe WorkbooksController do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/workbooks').to route_to('workbooks#index')
    end

    it 'routes to #show' do
      expect(get: '/workbooks/1').to route_to('workbooks#show', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/workbooks').to route_to('workbooks#create')
    end

    it 'routes to #update via PUT' do
      expect(put: '/workbooks/1').to route_to('workbooks#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/workbooks/1').to route_to('workbooks#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/workbooks/1').to route_to('workbooks#destroy', id: '1')
    end
  end
end
