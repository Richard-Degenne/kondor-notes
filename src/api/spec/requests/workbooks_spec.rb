# frozen_string_literal: true

describe '/workbooks', type: :request do
  describe 'GET /workbooks' do
    subject(:index) do
      get workbooks_url, headers: { 'Accept' => 'application/json' }
      response
    end

    before do
      create_list(:workbook, 5)
    end

    it { is_expected.to have_http_status :ok }

    it 'renders workbooks' do
      expect(JSON.parse(index.body).size).to eq 5
    end

    it 'renders the right attributes' do
      expect(JSON.parse(index.body).first).to include(
        Workbook.first.slice(:id, :name, :description)
      )
    end
  end

  describe 'GET /workbooks/:id' do
    subject(:show) do
      get workbook_url(id), headers: { 'Accept' => 'application/json' }
      response
    end

    let(:id) { workbook.id }
    let!(:workbook) { create(:workbook) }

    it { is_expected.to have_http_status :ok }

    it 'renders the workbook' do
      expect(JSON.parse(show.body)).to include(
        workbook.slice(:id, :name, :description)
      )
    end

    context 'with an invalid identifier' do
      let(:id) { 'invalid' }

      it { is_expected.to have_http_status :not_found }

      it 'renders errors' do
        expect(JSON.parse(show.body)).to include('error')
      end
    end
  end

  describe 'POST /workbooks' do
    subject(:kreate) do
      post workbooks_url, params: params.to_json, headers: {
        'Accept' => 'application/json', 'Content-Type' => 'application/json'
      }
      response
    end

    let(:params) { attributes_for(:workbook) }

    it { is_expected.to have_http_status :created }

    it 'creates a workbook' do
      expect { kreate }.to change(Workbook, :count).by(1)
    end

    it 'renders the workbook' do
      expect(JSON.parse(kreate.body)).to include(
        Workbook.last.slice(:id, :name, :description)
      )
    end

    context 'with invalid attributes' do
      let(:params) { attributes_for(:workbook, :invalid) }

      it { is_expected.to have_http_status :unprocessable_entity }

      it 'renders errors' do
        expect(JSON.parse(kreate.body)).to include('error')
      end
    end
  end

  describe 'PUT /workbooks/:id' do
    subject(:update) do
      put workbook_url(id), params: params.to_json, headers: {
        'Accept' => 'application/json', 'Content-Type' => 'application/json'
      }
      response
    end

    let(:id) { workbook.id }
    let!(:workbook) { create(:workbook) }

    let(:params) { attributes_for(:workbook) }

    it { is_expected.to have_http_status :ok }

    it 'updates the workbook' do
      update
      workbook.reload
      expect(workbook.attributes).to include(
        'name' => params[:name], 'description' => params[:description]
      )
    end

    it 'renders the workbook' do
      update
      workbook.reload
      expect(JSON.parse(update.body)).to include(
        workbook.slice(:id, :name, :description)
      )
    end

    context 'with invalid attributes' do
      let(:params) { attributes_for(:workbook, :invalid) }

      it { is_expected.to have_http_status :unprocessable_entity }

      it 'renders errors' do
        expect(JSON.parse(update.body)).to include('error')
      end
    end

    context 'with an invalid identifier' do
      let(:id) { 'invalid' }

      it { is_expected.to have_http_status :not_found }

      it 'renders errors' do
        expect(JSON.parse(update.body)).to include('error')
      end
    end
  end

  describe 'DELETE /workbooks/:id' do
    subject(:destroy) do
      delete workbook_url(id), headers: { 'Accept' => 'application/json' }
      response
    end

    let(:id) { workbook.id }
    let!(:workbook) { create(:workbook) }

    it { is_expected.to have_http_status :no_content }

    it 'destroys the workbook' do
      expect { destroy }.to change(Workbook, :count).by(-1)
    end

    context 'with an invalid identifier' do
      let(:id) { 'invalid' }

      it { is_expected.to have_http_status :not_found }

      it 'renders errors' do
        expect(JSON.parse(destroy.body)).to include('error')
      end
    end
  end
end
