# frozen_string_literal: true

describe Workbook do
  subject(:workbook) { build(:workbook, name:) }

  let(:name) { 'My workbook' }

  describe '#valid?' do
    subject(:valid?) { workbook.valid? }

    it { is_expected.to be true }

    context 'without a name' do
      let(:name) { nil }

      it { is_expected.to be false }
    end
  end
end
