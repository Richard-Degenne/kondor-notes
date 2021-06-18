# frozen_string_literal: true

describe 'Ping' do
  subject(:ping) do
    get ping_path
    response
  end

  it { is_expected.to have_http_status :ok }
  its(:body) { is_expected.to eq 'pong' }
end
